import React, {
  useCallback,
  useMemo,
  memo,
  useState,
  useEffect,
  useRef,
} from "react";
import { Marker, useMap, Source, Layer } from "react-map-gl";
import { useLoader } from "react-three-fiber";
import { Canvas } from "react-three-map/maplibre";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HemisphereLight } from "three";
import { useSelectedEnvironment } from "../../../Services/Reducers/SelectedEnvironmentContext";
import * as turf from "@turf/turf";
import { ToastError, ToastSuccess } from "../../../Services/Utility";
import ControlPanel from "./ControlPanel";
import { ClipLoader } from "react-spinners";
import SatisfactionLunch from "./SatisfactionLunch";

const FBXModel = memo(({ url, rotation, setLoading }) => {
  const fbx = useLoader(FBXLoader, url, () => setLoading(false));
  const fbxRef = useRef();

  useEffect(() => {
    setLoading(true);
  }, [url, setLoading]);

  return (
    <group ref={fbxRef} rotation={rotation} scale={0.0099}>
      <hemisphereLight args={["#ffffff", "#60666C"]} position={[1, 4.5, 3]} />
      <primitive object={fbx} />
    </group>
  );
});

const Mark = memo(() => {
  const { selectedEnvironment } = useSelectedEnvironment();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [rotationX, setRotationX] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  const map = useMap();
  const center = map.current.getCenter();
  const [markerPosition, setMarkerPosition] = useState({
    latitude: center.lat,
    longitude: center.lng,
  });

  useEffect(() => {
    const handleMove = () => {
      if (!isConfirmed) {
        const center = map.current.getCenter();
        setMarkerPosition({
          latitude: center.lat,
          longitude: center.lng,
        });
      }
    };

    map.current.on("move", handleMove);

    return () => {
      map.current.off("move", handleMove);
    };
  }, [map, isConfirmed]);

  const getRotatedPolygonCoordinates = useCallback(
    (markerPosition, environmentArea, rotationX) => {
      const center = [markerPosition.longitude, markerPosition.latitude];
      const radius = Math.sqrt(environmentArea) * 0.000006;

      // Define the square with four corner points
      const squareCoords = [
        [center[0] - radius, center[1] - radius], // NW
        [center[0] + radius, center[1] - radius], // NE
        [center[0] + radius, center[1] + radius], // SE
        [center[0] - radius, center[1] + radius], // SW
        [center[0] - radius, center[1] - radius], // Closing NW
      ];

      // Rotate the square
      const squareFeature = turf.polygon([squareCoords]);
      const rotatedSquare = turf.transformRotate(
        squareFeature,
        90 - rotationX,
        {
          pivot: center,
        }
      );

      return rotatedSquare.geometry.coordinates[0];
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
                parseFloat(selectedEnvironment.attributes[14].value),
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

  const environmentCoordinates = selectedEnvironment.coordinates.map(
    (coord) => {
      const [longitude, latitude] = coord.split(",");
      return [parseFloat(longitude), parseFloat(latitude)];
    }
  );

  const environmentPolygon = turf.polygon([environmentCoordinates]);
  const rotatedPolygonCoordinates = getRotatedPolygonCoordinates(
    markerPosition,
    parseFloat(selectedEnvironment.attributes[14].value),
    rotationX
  );

  const isRotatedPolygonInside = rotatedPolygonCoordinates.every((coord) => {
    const point = turf.point(coord);
    return turf.booleanPointInPolygon(point, environmentPolygon);
  });

  const handleConfirmation = useCallback(() => {
    if (!isRotatedPolygonInside) {
      ToastError("محیط شما در محدوده زمین شما نیست");
    } else {
      setIsConfirmed(true);
      ToastSuccess("محیط با موفقیت در محدوده زمین شما ثبت شد");
    }
  }, [isRotatedPolygonInside]);

  return (
    <>
      <Marker
        latitude={markerPosition.latitude}
        longitude={markerPosition.longitude}
      >
        {!isConfirmed && (
          <Source id="polygon-source" type="geojson" data={polygonData}>
            <Layer
              id="polygon-layer"
              type="fill"
              paint={{
                "fill-color": isRotatedPolygonInside ? "green" : "red",
                "fill-outline-color": "black",
              }}
            />
          </Source>
        )}
        {!isLoading && <ClipLoader color="#36d7b7" />}
        <Canvas
          latitude={markerPosition.latitude}
          longitude={markerPosition.longitude}
        >
          <FBXModel
            url={selectedEnvironment.file.url}
            key={2}
            rotation={[0, (rotationX * Math.PI) / 180, 0]}
            setLoading={setIsLoading}
          />
        </Canvas>
      </Marker>
      {!isConfirmed && (
        <ControlPanel
          rotationX={rotationX}
          setRotationX={setRotationX}
          handleConfirmation={handleConfirmation}
          status={isRotatedPolygonInside}
        />
      )}
      {isConfirmed && isRotatedPolygonInside && <SatisfactionLunch />}
    </>
  );
});

export default Mark;
