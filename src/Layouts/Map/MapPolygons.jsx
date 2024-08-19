import React, { memo, useEffect, useState, useRef, useCallback } from "react";
import { Layer, Source, useMap } from "react-map-gl";
import { useLoader } from "@react-three/fiber";
import { Canvas, Coordinates } from "react-three-map/maplibre";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HemisphereLight } from "three";
import { BORDER_COLORS } from "../../Services/Constants/BorderColors";
import { POLYGON_COLORS } from "../../Services/Constants/PolygonColors";
import useRequest from "../../Services/Hooks/useRequest";
import { ClipLoader } from "react-spinners";

const FBXModel = memo(({ url, rotation, setLoading, uniqueKey }) => {
  const fbx = useLoader(FBXLoader, url, (loader) => {
    loader.manager.onStart = () => setLoading(true);
    loader.manager.onLoad = () => setLoading(false);
    loader.manager.onError = () => setLoading(false);
  });

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
  const map = useMap();
  const bounds = map.current.getBounds();
  const [features, setFeatures] = useState([]);
  const [buildingModels, setBuildingModels] = useState([]);
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
        const data = [];
        for (const feature of features) {
          if (parseInt(feature.id) === parseInt(e.data.id)) {
            feature.rgb = e.data.rgb;
          }
          data.push(feature);
        }

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
        const newFeatures = [];
        const newBuildingModels = [];
        for (const feature of response?.data?.data) {
          newFeatures.push({
            id: feature?.geometry?.feature_id,
            rgb: feature?.properties?.rgb,
            coordinates: feature?.geometry?.coordinates.map((coordinate) => [
              parseFloat(coordinate.x),
              parseFloat(coordinate.y),
            ]),
          });

          if (feature.building_models) {
            for (const model of feature.building_models) {
              newBuildingModels.push(model);
            }
          }
        }

        setFeatures((prevFeatures) => [...prevFeatures, ...newFeatures]);
        setBuildingModels((prevModels) => [
          ...prevModels,
          ...newBuildingModels,
        ]);
      });
    }
  }, [bounds.getSouthWest().lng, zoom]);

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
            paint={{
              "fill-color": ["get", "fill"],
            }}
          />
          <Layer
            id="polygon-outline-layer"
            type="line"
            paint={{
              "line-color": ["get", "border"],
              "line-width": 3,
            }}
          />
        </Source>
      )}
      {zoom >= 15 && buildingModels.length > 0 && (
        <Canvas latitude={36} longitude={50}>
          {buildingModels.map(
            (model) => (
              console.log(parseFloat(model.building.position.split(",")[0])),
              (
                <Coordinates
                  latitude={parseFloat(model.building.position.split(",")[0])}
                  longitude={parseFloat(model.building.position.split(",")[1])}
                >
                  <FBXModel
                    url={model.file.url}
                    rotation={[0, 0, 0]}
                    setLoading={setIsLoading}
                    uniqueKey={`${model.id}-model`}
                    key={`${model.id}-model`} // Make sure to use the key prop here for React optimization
                  />
                </Coordinates>
              )
            )
          )}
        </Canvas>
      )}
    </>
  );
};

export default MapPolygons;
