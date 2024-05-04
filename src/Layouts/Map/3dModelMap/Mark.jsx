import React, {
  useCallback,
  useMemo,
  memo,
  useState,
  useEffect,
  useRef,
} from "react";
import { Marker, useMap, Source, Layer } from "react-map-gl";
import { button, levaStore, useControls } from "leva";
import { useFrame, useLoader } from "react-three-fiber";
import { Canvas, Coordinates } from "react-three-map/maplibre";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HemisphereLight } from "three";
import { Suspense } from "react";
import { useSelectedEnvironment } from "../../../Services/Reducers/SelectedEnvironmentContext";
import { point, booleanPointInPolygon } from "@turf/turf";
import * as turf from "@turf/turf";
import { ToastError, ToastSuccess } from "../../../Services/Utility";

const FBXModel = memo(({ url, position, rotation }) => {
  const fbx = useLoader(FBXLoader, url);
  const fbxRef = useRef();

  return (
    <group ref={fbxRef} rotation={rotation} scale={0.0099}>
      <hemisphereLight args={["#ffffff", "#60666C"]} position={[1, 4.5, 3]} />
      <primitive object={fbx} />
    </group>
  );
});

const Mark = memo(() => {
  const { selectedEnvironment, toggleConfirmation } = useSelectedEnvironment();

  const { rotationX, setRotationX } = useControls({
    rotationX: {
      value: 0,
      min: 0,
      max: 360,
      step: 0.001,
    },
  });
  const map = useMap();
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 36.3065335817618,
    longitude: 50.026222140673994,
  });

  const onMapMove = useCallback(() => {
    const center = map.current.getCenter();
    setMarkerPosition({
      latitude: center.lat,
      longitude: center.lng,
    });
  }, [map]);

  useEffect(() => {
    map.current.on("move", onMapMove);

    return () => {
      map.current.off("move", onMapMove);
    };
  }, [map, onMapMove]);

  const getRotatedPolygonCoordinates = useCallback(
    (markerPosition, environmentArea, rotationX) => {
      const radius = Math.sqrt(environmentArea) * 0.0000065;
      const center = [markerPosition.longitude, markerPosition.latitude];
      const points = [
        [-radius, -radius],
        [radius, -radius],
        [radius, radius],
        [-radius, radius],
      ].map(([x, y]) => {
        const theta = (rotationX * Math.PI) / 180;
        const rotatedX = x * Math.cos(theta) - y * Math.sin(theta);
        const rotatedY = x * Math.sin(theta) + y * Math.cos(theta);
        return [rotatedX, rotatedY];
      });
      return points.map(([x, y]) => [center[0] + x, center[1] + y]);
    },
    []
  );

  const polygonData = useMemo(() => {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              getRotatedPolygonCoordinates(
                markerPosition,
                parseFloat(selectedEnvironment[0].attributes[14].value),
                rotationX
              ),
            ],
          },
        },
      ],
    };
  }, [
    markerPosition,
    selectedEnvironment,
    rotationX,
    getRotatedPolygonCoordinates,
  ]);
  const environmentCoordinates = selectedEnvironment[0].coordinates.map(
    (coord) => {
      const [longitude, latitude] = coord.split(",");
      return [parseFloat(longitude), parseFloat(latitude)];
    }
  );
  const environmentPolygon = turf.polygon([environmentCoordinates]);
  const rotatedPolygonCoordinates = getRotatedPolygonCoordinates(
    markerPosition,
    parseFloat(selectedEnvironment[0].attributes[14].value),
    rotationX
  );

  const isRotatedPolygonInside = rotatedPolygonCoordinates.every((coord) => {
    const point = turf.point(coord);
    return turf.booleanPointInPolygon(point, environmentPolygon);
  });

  const { openCloseMenu } = useControls(
    {
      foo: button(() => handleConfirmation()),
    },
    [isRotatedPolygonInside] // Move useControls hook after isRotatedPolygonInside
  );
  const handleConfirmation = useCallback(() => {
    if (!isRotatedPolygonInside) {
      ToastError("محیط شما در محدوده زمین شما نیست");
    } else {
      toggleConfirmation();
      ToastSuccess("محیط با موفقیت در محدوده زمین شما ثبت شد");
    }
  }, [isRotatedPolygonInside, toggleConfirmation]);

  console.log(isRotatedPolygonInside);

  return (
    <>
      <Marker
        latitude={markerPosition.latitude}
        longitude={markerPosition.longitude}
      >
        <Source id="polygon-source" type="geojson" data={polygonData}>
          <Layer
            id="polygon-layer"
            type="fill"
            paint={{
              "fill-color": "rgba(255, 0, 0, 0.5)",
              "fill-outline-color": "black",
            }}
          />
        </Source>

        <Suspense fallback={null}>
          <Canvas
            latitude={markerPosition.latitude}
            longitude={markerPosition.longitude}
          >
            <FBXModel
              url={selectedEnvironment[0].file.url}
              key={2}
              rotation={[0, (rotationX * Math.PI) / 180, 0]}
            />
          </Canvas>
        </Suspense>
      </Marker>
    </>
  );
});

export default Mark;
