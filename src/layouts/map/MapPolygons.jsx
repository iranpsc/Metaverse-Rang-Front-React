import { memo, useEffect, useRef, useState } from "react";
import { Layer, Source, useMap } from "react-map-gl";
import { useLoader } from "@react-three/fiber";
import { Canvas, Coordinates } from "react-three-map/maplibre";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { BORDER_COLORS } from "../../services/constants/BorderColors";
import { POLYGON_COLORS } from "../../services/constants/PolygonColors";
import useRequest from "../../services/Hooks/useRequest";
import { useMapData } from "../../services/reducers/mapContext";
import { useSelectedEnvironment } from "../../services/reducers/SelectedEnvironmentContext";
import { useMapLands } from "../../services/reducers/MapLandsContext";
import { showPolygons } from "../../services/Hooks/useMapUrlState";

const FBXModel = memo(({ url, rotation, setLoading, uniqueKey, opacity }) => {
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
        child.material.forEach((material) => {
          if (material) {
            applyOpacity(material);
          }
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
  const { mapLands, setMapLands } = useMapLands();

  const map = useMap();
  const { Request } = useRequest();

  const [isPolygonSourceLoaded, setIsPolygonSourceLoaded] = useState(false);

  const [zoom, setZoom] = useState(map.current?.getZoom() || 0);

  const [, setIsLoading] = useState(false);

  const requestTimeoutRef = useRef(null);

  const isRequestingRef = useRef(false);

  const lastBoundsRef = useRef(null);

  const requestIdRef = useRef(0);

  useEffect(() => {
    if (!map.current) return;

    const mapInstance = map.current;

    const handleZoomEnd = () => {
      setZoom(mapInstance.getZoom());
    };

    mapInstance.on("zoomend", handleZoomEnd);

    return () => {
      mapInstance.off("zoomend", handleZoomEnd);
    };
  }, [map]);

  useEffect(() => {
    if (!window.Echo) return;

    const channel = window.Echo.channel("feature-status");

    const handleFeatureStatus = (e) => {
      setMapLands((prevFeatures) =>
        prevFeatures.map((feature) => {
          if (parseInt(feature.id) === parseInt(e.data.id)) {
            return {
              ...feature,
              rgb: e.data.rgb,
            };
          }

          return feature;
        }),
      );
    };

    channel.listen(".feature-status-changed", handleFeatureStatus);

    return () => {
      channel.stopListening(".feature-status-changed", handleFeatureStatus);
    };
  }, [setMapLands]);

  useEffect(() => {
    if (!map.current) return;

    const mapInstance = map.current;

    const loadFeatures = async () => {
      if (mapInstance.getZoom() < showPolygons) {
        return;
      }

      if (isRequestingRef.current) {
        return;
      }

      const bounds = mapInstance.getBounds();

      if (!bounds) return;

      const southWest = bounds.getSouthWest();
      const southEast = bounds.getSouthEast();
      const northWest = bounds.getNorthWest();
      const northEast = bounds.getNorthEast();

      const boundsKey = [
        southWest.lng.toFixed(4),
        southWest.lat.toFixed(4),
        southEast.lng.toFixed(4),
        southEast.lat.toFixed(4),
        northWest.lng.toFixed(4),
        northWest.lat.toFixed(4),
        northEast.lng.toFixed(4),
        northEast.lat.toFixed(4),
      ].join(",");

      if (lastBoundsRef.current === boundsKey) {
        return;
      }

      lastBoundsRef.current = boundsKey;

      const requestId = ++requestIdRef.current;

      isRequestingRef.current = true;

      try {
        const url =
          `features?points[]=${southWest.lng},${southWest.lat}` +
          `&points[]=${southEast.lng},${southEast.lat}` +
          `&points[]=${northWest.lng},${northWest.lat}` +
          `&points[]=${northEast.lng},${northEast.lat}` +
          `&load_buildings=1`;
        const response = await Request(url);

        if (requestId !== requestIdRef.current) {
          return;
        }

        const data = response?.data?.data || [];

        if (!Array.isArray(data) || data.length === 0) {
          return;
        }

        const newFeatures = data
          .map((feature) => ({
            id: feature?.geometry?.feature_id,
            rgb: feature?.properties?.rgb,

            coordinates:
              feature?.geometry?.coordinates?.map((coordinate) => [
                parseFloat(coordinate.x),
                parseFloat(coordinate.y),
              ]) || [],
          }))
          .filter((feature) => feature.id !== undefined && feature.id !== null);

        const newBuildingModels = data.flatMap(
          (feature) => feature?.building_models || [],
        );

        setMapLands((prevFeatures) => {
          const existingIds = new Set(
            prevFeatures.map((feature) => String(feature.id)),
          );

          const uniqueFeatures = newFeatures.filter(
            (feature) => !existingIds.has(String(feature.id)),
          );

          if (uniqueFeatures.length === 0) {
            return prevFeatures;
          }

          return [...prevFeatures, ...uniqueFeatures];
        });

        setBuildings((prevModels) => {
          const existingIds = new Set(
            prevModels.map((model) => String(model.id)),
          );

          const uniqueBuildings = newBuildingModels.filter(
            (model) =>
              model?.id !== undefined &&
              model?.id !== null &&
              !existingIds.has(String(model.id)),
          );

          if (uniqueBuildings.length === 0) {
            return prevModels;
          }

          return [...prevModels, ...uniqueBuildings];
        });
      } catch (error) {
        console.error("Error loading map features:", error);

        lastBoundsRef.current = null;
      } finally {
        isRequestingRef.current = false;
      }
    };

    const handleMoveEnd = () => {
      if (requestTimeoutRef.current) {
        clearTimeout(requestTimeoutRef.current);
      }

      requestTimeoutRef.current = setTimeout(() => {
        loadFeatures();
      }, 600);
    };

    mapInstance.on("moveend", handleMoveEnd);

    loadFeatures();

    return () => {
      mapInstance.off("moveend", handleMoveEnd);

      if (requestTimeoutRef.current) {
        clearTimeout(requestTimeoutRef.current);
      }
    };

    mapInstance.on("moveend", handleMoveEnd);

    requestTimeoutRef.current = setTimeout(() => {
      loadFeatures();
    }, 300);

    return () => {
      mapInstance.off("moveend", handleMoveEnd);

      if (requestTimeoutRef.current) {
        clearTimeout(requestTimeoutRef.current);
      }
    };
  }, [map, Request, setMapLands, setBuildings]);

  useEffect(() => {
    if (!map.current || zoom < showPolygons) {
      setIsPolygonSourceLoaded(false);
      return;
    }

    const mapInstance = map.current;

    const handleSourceData = (event) => {
      if (event.sourceId === "polygons" && event.isSourceLoaded) {
        setIsPolygonSourceLoaded(true);
      }
    };

    mapInstance.on("sourcedata", handleSourceData);

    const source = mapInstance.getSource("polygons");

    if (source) {
      const sourceCache = mapInstance.style?.sourceCaches?.["polygons"];

      if (sourceCache?.loaded()) {
        setIsPolygonSourceLoaded(true);
      }
    }

    return () => {
      mapInstance.off("sourcedata", handleSourceData);
    };
  }, [zoom, map]);

  return (
    <>
      {zoom >= showPolygons && (
        <Source
          id="polygons"
          type="geojson"
          data={{
            type: "FeatureCollection",

            features: mapLands.map((polygon) => ({
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
              map.current?.getLayer("location-icon-layer")
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
              map.current?.getLayer("location-icon-layer")
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

      {zoom >= showPolygons &&
        isPolygonSourceLoaded &&
        buildings.length > 0 && (
          <Canvas
            latitude={36}
            longitude={50}
            key={selectedEnvironment ? selectedEnvironment.id : "no-env"}
          >
            {buildings.map((model, index) => {
              const endDate = new Date(model?.building?.construction_end_date);

              const now = new Date();

              const opacity = now < endDate ? 0.3 : 1;

              return (
                <Coordinates
                  key={model.feature_id || model.id || index}
                  latitude={parseFloat(
                    model?.building?.position?.split(",")[0],
                  )}
                  longitude={parseFloat(
                    model?.building?.position?.split(",")[1],
                  )}
                >
                  <FBXModel
                    opacity={opacity}
                    url={model.file.url}
                    rotation={[0, model?.building?.rotation ?? 0, 0]}
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
