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
import { ToastError, ToastSuccess } from "../../../Services/Utility";
import ControlPanel from "./ControlPanel";
import { ClipLoader } from "react-spinners";
import SatisfactionLunch from "./SatisfactionLunch";
import * as turf from "@turf/turf";

const calculateSquareCoordinates = (center, area) => {
  const R = 6378137; // Radius of the Earth in meters
  const sideLength = Math.sqrt(area); // طول ضلع مربع از ریشه دوم مساحت
  const halfSideLength = sideLength / 2; // نصف طول ضلع به متر
  const deltaLat = (halfSideLength / R) * (180 / Math.PI);
  const deltaLng =
    (halfSideLength / (R * Math.cos((Math.PI * center.latitude) / 180))) *
    (180 / Math.PI);

  const coordinates = [
    [center.longitude - deltaLng, center.latitude + deltaLat],
    [center.longitude + deltaLng, center.latitude + deltaLat],
    [center.longitude + deltaLng, center.latitude - deltaLat],
    [center.longitude - deltaLng, center.latitude - deltaLat],
    [center.longitude - deltaLng, center.latitude + deltaLat],
  ];

  return coordinates;
};

const FBXModel = memo(({ url, rotation, setLoading }) => {
  const proxyFbxUrl = `https://middle.irpsc.com/app/?url=${url}`;
  const fbx = useLoader(FBXLoader, proxyFbxUrl, (loader) => {
    loader.manager.onStart = () => setLoading(true);
    loader.manager.onLoad = () => setLoading(false);
    loader.manager.onError = () => setLoading(false);
  });
  const fbxRef = useRef();
  return (
    <group ref={fbxRef} rotation={rotation} scale={0.0097}>
      <hemisphereLight
        args={["#ffffff", "#60666C"]}
        intensity={12}
        position={[1, 4.5, 3]}
      />
      <primitive object={fbx} />
    </group>
  );
});

const Mark = memo(() => {
  const { selectedEnvironment } = useSelectedEnvironment();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [rotationX, setRotationX] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Initialize as false
  const [showCanvas, setShowCanvas] = useState(true); // New state to control canvas rendering
  const [showPolygon, setShowPolygon] = useState(true); // New state to control polygon visibility
  const [environmentFixed, setEnvironmentFixed] = useState(false); // New state to control environment fixing
  const map = useMap();
  const center = map.current.getCenter();
  const desiredSlug = "area";
  const attributeObject = selectedEnvironment.attributes.find(
    (attribute) => attribute.slug === desiredSlug
  );
  const size = parseFloat(attributeObject.value);
  const [markerPosition, setMarkerPosition] = useState({
    latitude: center.lat,
    longitude: center.lng,
  });

  const polygonCoordinates = useMemo(
    () => calculateSquareCoordinates(markerPosition, size),
    [markerPosition, size]
  );

  const rotatedPolygonCoordinates = useMemo(() => {
    const polygon = turf.polygon([polygonCoordinates]);
    const rotatedPolygon = turf.transformRotate(polygon, 90 - rotationX, {
      pivot: [markerPosition.longitude, markerPosition.latitude],
    });
    return rotatedPolygon.geometry.coordinates[0];
  }, [polygonCoordinates, markerPosition, rotationX]);

  const environmentCoordinates = useMemo(
    () =>
      selectedEnvironment.coordinates.map((coord) => {
        const [longitude, latitude] = coord.split(",");
        return [parseFloat(longitude), parseFloat(latitude)];
      }),
    [selectedEnvironment.coordinates]
  );

  const isRotatedPolygonInside = useMemo(() => {
    const environmentPolygon = turf.polygon([environmentCoordinates]);
    const rotatedPolygon = turf.polygon([rotatedPolygonCoordinates]);
    return turf.booleanContains(environmentPolygon, rotatedPolygon);
  }, [environmentCoordinates, rotatedPolygonCoordinates]);

  useEffect(() => {
    const handleMove = () => {
      if (!isConfirmed && !environmentFixed) {
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
  }, [map, isConfirmed, environmentFixed]);

  const handleConfirmation = useCallback(() => {
    if (!isRotatedPolygonInside) {
      ToastError("محیط شما در محدوده زمین شما نیست");
    } else {
      setIsConfirmed(true);
      ToastSuccess("محیط با موفقیت در محدوده زمین شما ثبت شد");
    }
  }, [isRotatedPolygonInside]);

  const handleExit = useCallback(() => {
    setIsConfirmed(false);
    setShowCanvas(false); // Hide canvas before rendering polygon
    setTimeout(() => setShowCanvas(true), 0); // Show canvas after a brief delay
  }, []);

  const handelSubmitEnvironment = useCallback(() => {
    setIsConfirmed(false);
    setShowPolygon(false); // Hide polygon when environment is submitted
    setEnvironmentFixed(true); // Fix the environment
  }, []);

  return (
    <>
      {showPolygon && !isConfirmed && (
        <Source
          id="polygon"
          type="geojson"
          data={{
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [rotatedPolygonCoordinates],
            },
          }}
        >
          <Layer
            id="polygon-layer"
            type="fill"
            paint={{
              "fill-color": isRotatedPolygonInside ? "green" : "red",
            }}
          />
          <Layer
            id="polygon-outline-layer"
            type="line"
            paint={{
              "line-color": "#000000",
              "line-width": 2,
            }}
          />
        </Source>
      )}
      <Marker
        latitude={markerPosition.latitude}
        longitude={markerPosition.longitude}
      >
        {isLoading && <ClipLoader color="#36d7b7" />}
        {showCanvas && (
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
        )}
      </Marker>
      {showPolygon && !isConfirmed && (
        <ControlPanel
          rotationX={rotationX}
          setRotationX={setRotationX}
          handleConfirmation={handleConfirmation}
        />
      )}
      {isConfirmed && (
        <SatisfactionLunch
          position={[markerPosition.latitude, markerPosition.longitude]}
          rotation={(rotationX * Math.PI) / 180}
          handleExitClick={handleExit}
          handelSubmitEnvironment={handelSubmitEnvironment}
        />
      )}
    </>
  );
});

export default Mark;
