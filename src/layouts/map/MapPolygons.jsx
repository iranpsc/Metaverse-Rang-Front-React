import React, { memo, useEffect, useState, useRef } from "react";
import { Layer, Source, useMap } from "react-map-gl";
import { useLoader } from "@react-three/fiber";
import { Canvas, Coordinates } from "react-three-map/maplibre";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HemisphereLight } from "three";
import { BORDER_COLORS } from "../../services/constants/BorderColors";
import { POLYGON_COLORS } from "../../services/constants/PolygonColors";
import useRequest from "../../services/Hooks/useRequest";
import { ClipLoader } from "react-spinners";
import { useMapData } from "../../services/reducers/mapContext";
import { useSelectedEnvironment } from "../../services/reducers/SelectedEnvironmentContext";

// Add the proxy URL to bypass CORS
const FBXModel = memo(({ url, rotation, setLoading, uniqueKey, opacity }) => {
  // Prepend proxy URL to avoid CORS issues
  const fbx = useLoader(FBXLoader, url, (loader) => {
    loader.manager.onStart = () => setLoading(true);
    loader.manager.onLoad = () => setLoading(false);
    loader.manager.onError = () => setLoading(false);
  });
  useEffect(() => {
    if (!fbx) return;

    fbx.traverse((child) => {
      if (!child.isMesh) return;

      const applyOpacity = (material) => {
        material.transparent = true;
        material.opacity = opacity;
        material.depthWrite = opacity === 1;
        material.needsUpdate = true;
      };

      if (Array.isArray(child.material)) {
        child.material.forEach((mat) => {
          if (mat) applyOpacity(mat);
        });
      } else if (child.material) {
        applyOpacity(child.material);
      }
    });
  }, [fbx, opacity]);
  const fbxRef = useRef();
  return (
    <group ref={fbxRef} rotation={rotation} scale={0.0097} key={uniqueKey}>
      <hemisphereLight
        args={["#ffffff", "#60666C"]}
        intensity={12}
        key={`${uniqueKey}-light`}
      />
      <primitive object={fbx} key={`${uniqueKey}-primitive`} />
    </group>
  );
});

const MapPolygons = () => {
  const { buildings, setBuildings } = useMapData();
  const { selectedEnvironment } = useSelectedEnvironment();

  const map = useMap();
  const bounds = map.current.getBounds();
  const [features, setFeatures] = useState([]);
  const [zoom, setZoom] = useState(map.current.getZoom());
  const [isLoading, setIsLoading] = useState(false);
  const { Request } = useRequest();

  useEffect(() => {
    const handleViewportChange = () => {
      setZoom(map.current.getZoom());
    };

    map.current.on("zoomend", handleViewportChange);

    return () => {
      map.current.off("zoomend", handleViewportChange);
    };
  }, [map]);

  useEffect(() => {
    window.Echo.channel("feature-status").listen(
      ".feature-status-changed",
      (e) => {
        const data = features.map((feature) => {
          if (parseInt(feature.id) === parseInt(e.data.id)) {
            return { ...feature, rgb: e.data.rgb };
          }
          return feature;
        });

        setFeatures(data);
      }
    );
  }, [features]);

  useEffect(() => {
    if (bounds.getSouthWest().lng && zoom >= 14) {
      const loadBuildings = zoom >= 15 ? "&load_buildings=1" : "";
      Request(
        `features?points[]=${bounds.getSouthWest().lng},${
          bounds.getSouthWest().lat
        }&points[]=${bounds.getSouthEast().lng},${
          bounds.getSouthEast().lat
        }&points[]=${bounds.getNorthWest().lng},${
          bounds.getNorthWest().lat
        }&points[]=${bounds.getNorthEast().lng},${
          bounds.getNorthEast().lat
        }${loadBuildings}`
      ).then((response) => {
        const newFeatures =
          response?.data?.data?.map((feature) => ({
            id: feature?.geometry?.feature_id,
            rgb: feature?.properties?.rgb,
            coordinates: feature?.geometry?.coordinates.map((coordinate) => [
              parseFloat(coordinate.x),
              parseFloat(coordinate.y),
            ]),
          })) || [];

        const newBuildingModels = response?.data?.data?.flatMap(
          (feature) => feature.building_models || []
        );

        setFeatures((prevFeatures) => [...prevFeatures, ...newFeatures]);

        setBuildings((prevModels) => [...prevModels, ...newBuildingModels]);
      });
    }
  }, [bounds.getSouthWest().lng, zoom]);
console.log("feat","features")
  return (
    <>
      {zoom >= 14 && (
        <Source
          id="polygons"
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: features.map((polygon) => ({
              type: "Feature",
              properties: {
                id: polygon.id,
                fill: POLYGON_COLORS[polygon.rgb],
                border: BORDER_COLORS[polygon.rgb],
              },
              geometry: {
                type: "Polygon",
                coordinates: [polygon.coordinates],
              },
            })),
          }}
        >
          <Layer
            id="polygon-fill-layer"
            type="fill"
            beforeId={
              map.current.getLayer("location-icon-layer")
                ? "location-icon-layer"
                : undefined
            }
            paint={{
              "fill-color": ["get", "fill"],
            }}
          />
          <Layer
            id="polygon-outline-layer"
            type="line"
            beforeId={
              map.current.getLayer("location-icon-layer")
                ? "location-icon-layer"
                : undefined
            }
            paint={{
              "line-color": ["get", "border"],
              "line-width": 2,
            }}
          />
        </Source>
      )}
      {zoom >= 14 && buildings.length > 0 && (
        <Canvas latitude={36} longitude={50}
          key={selectedEnvironment ? selectedEnvironment.id : "no-env"}
>
          {buildings.map((model, index) => {
            const endDate = new Date(model.building.construction_end_date);
            const now = new Date();
            const opacity = now < endDate ? 0.3 : 1;
            const proxyFbxUrl = `https://middle.irpsc.com/app/?url=${model.file.url}`;
            return (
              <Coordinates
                key={model.feature_id}
                latitude={parseFloat(model.building.position.split(",")[0])}
                longitude={parseFloat(model.building.position.split(",")[1])}
              
              >
                <FBXModel
                  opacity={opacity}
                  url={proxyFbxUrl}
                  rotation={[0, model.building.rotation ?? 0, 0]}
                  setLoading={setIsLoading}
                  uniqueKey={`${model.id}-${index}-model`}
                />
              </Coordinates>
            );
          })}
        </Canvas>
      )}
    </>
  );
};

export default MapPolygons;
