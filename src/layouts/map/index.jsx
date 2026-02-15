import React, {
  useState,
  useRef,
  createContext,
  useCallback,
  useEffect,
  memo,
} from "react";
import Map, { AttributionControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useNavigate } from "react-router-dom";
import * as turf from "@turf/turf";

import { Container } from "./styles";
import MapPolygons from "./MapPolygons";
import MapFlag from "./MapFlag";
import Mark from "./3dModelMap/Mark";

import { useSelectedEnvironment } from "../../services/reducers/SelectedEnvironmentContext";
import { useLanguage } from "../../services/reducers/LanguageContext";

import AuthMiddleware from "../../middleware/AuthMiddleware";
import ZoomControls from "../../components/ZoomControls";
import FullscreenControls from "../../components/FullscreenControls";

export const TransactionContext = createContext(null);

const MemoMapPolygons = memo(MapPolygons);
const MemoMapFlag = memo(MapFlag);
const MemoMark = memo(Mark);

const MIN_ZOOM = 18;

const MapTreeD = () => {
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const [isFullScreen, setFullScreen] = useState(false);
  const [isCompact, setIsCompact] = useState(window.innerWidth < 1000);

  const mapRef = useRef(null);
  const { confirmation, selectedEnvironment, hiddenModel } =
    useSelectedEnvironment();
  const isPersian = useLanguage();
  const navigate = useNavigate();

  const handleZoomChange = useCallback((delta) => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    map.zoomTo(map.getZoom() + delta, { duration: 200 });
  }, []);

  const toggleFullScreen = useCallback(() => {
    const container = mapRef.current?.getMap()?.getContainer();
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen?.();
      setFullScreen(true);
    } else {
      document.exitFullscreen?.();
      setFullScreen(false);
    }
  }, []);

  useEffect(() => {
    if (isFullScreen && screen.orientation) {
      screen.orientation.lock("landscape-primary").catch(() => {});
    }
  }, [isFullScreen]);

  const handleMapClick = useCallback(
    (event) => {
      const feature = event.features?.[0];
      if (!feature) return;

      if (feature.properties?.id) {
        navigate(`/metaverse/feature/${feature.properties.id}`);
      }

      const map = mapRef.current?.getMap();
      if (!map) return;

      const center = turf.center(feature.geometry);
      const currentZoom = map.getZoom();

      map.easeTo({
        center: center.geometry.coordinates,
        zoom: currentZoom < MIN_ZOOM ? MIN_ZOOM : currentZoom,
        duration: 800,
      });
    },
    [navigate],
  );

  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const attrib = document.querySelector(".maplibregl-ctrl-attrib");
      if (attrib?.classList.contains("maplibregl-compact-show")) {
        attrib.classList.remove("maplibregl-compact-show");
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <AuthMiddleware>
      <TransactionContext.Provider
        value={{ selectedTransaction, setSelectedTransaction }}
      >
        <Container>
          <Map
            ref={mapRef}
            className="map"
            attributionControl={false}
            antialias
            mapStyle="/metaverse/styleMap.json"
            RTLTextPlugin="https://map.irpsc.com/rtl.js"
            interactiveLayerIds={["polygon-fill-layer"]}
            maxPitch={78}
            style={{ borderRadius: "15px" }}
            initialViewState={{
              latitude: 36.32,
              longitude: 50.02,
              zoom: 12,
              pitch: 40,
            }}
            onClick={handleMapClick}
          >
            {confirmation && selectedEnvironment && !hiddenModel && (
              <MemoMark />
            )}
            <MemoMapPolygons />
            <MemoMapFlag />
            <AttributionControl position="bottom-right" compact={isCompact} />
          </Map>

          <ZoomControls isPersian={isPersian} onZoomChange={handleZoomChange} />
          <FullscreenControls
            isPersian={isPersian}
            onToggleMapFullScreen={toggleFullScreen}
          />
        </Container>
      </TransactionContext.Provider>
    </AuthMiddleware>
  );
};

export default memo(MapTreeD);
