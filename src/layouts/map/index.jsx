import React, { useState, useRef, createContext, useCallback, useEffect } from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import MapPolygons from "./MapPolygons";
import MapFlag from "./MapFlag";
import Mark from "./3dModelMap/Mark";
import { useSelectedEnvironment } from "../../services/reducers/SelectedEnvironmentContext";
import { useLanguage } from "../../services/reducers/LanguageContext";
import * as turf from "@turf/turf";
import AuthMiddleware from "../../middleware/AuthMiddleware";
import ZoomControls from "../../components/ZoomControls";
import FullscreenControls from "../../components/FullscreenControls";

export const TransactionContext = createContext(null);

const MemoMapPolygons = React.memo(MapPolygons);
const MemoMapFlag = React.memo(MapFlag);
const MemoMark = React.memo(Mark);

const MapTreeD = () => {
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null); // <<=== اضافه شد

  const [isFullScreen, setFullScreen] = useState(false);
  const [isFullScreenMap, setFullScreenMap] = useState(false);

  const { confirmation, selectedEnvironment, hiddenModel } = useSelectedEnvironment();
  const isPersian = useLanguage();
  const navigate = useNavigate();

  const handleZoomChange = useCallback((delta) => {
    if (!mapRef.current) return;
    const map = mapRef.current.getMap();
    map.zoomTo(map.getZoom() + delta, { duration: 200 });
  }, []);

  const handleZoomEnd = useCallback(() => { }, []);

  const handleFullscreenToggle = useCallback(() => {
    if (!mapContainerRef.current) return;
    if (!isFullScreenMap) {
      mapContainerRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setFullScreenMap((prev) => !prev);
  }, [isFullScreenMap]);

  const toggleFullScreen = useCallback(() => {
    const docElement = document.documentElement;
    if (!isFullScreen) {
      docElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setFullScreen((prev) => !prev);
  }, [isFullScreen]);

  const handleMapClick = useCallback(
    (event) => {
      const feature = event.features?.[0];
      if (feature?.properties?.id) {
        navigate(`/metaverse/feature/${feature.properties.id}`);
      }
      if (!mapRef.current) return;
      const map = mapRef.current.getMap();
      const center = turf.center(feature.geometry);
      const currentZoom = map.getZoom();
      const MIN_ZOOM = 18;
      map.easeTo({
        center: center.geometry.coordinates,
        zoom: currentZoom < MIN_ZOOM ? MIN_ZOOM : currentZoom,
        duration: 800,
        easing: (t) => t,
      });
    },
    [navigate],
  );

  useEffect(() => {
    if (isFullScreen && screen.orientation) {
      screen.orientation.lock("landscape-primary").catch(() => { });
    }
  }, [isFullScreen]);

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
      <TransactionContext.Provider value={{ selectedTransaction, setSelectedTransaction }}>
        <Container>
          <div ref={mapContainerRef} style={{ position: "relative", width: "100%", height: "100%" }}>
            <Map
              ref={mapRef}
              className="map"
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
              onZoomEnd={handleZoomEnd}
            >
              {confirmation && selectedEnvironment && !hiddenModel && <MemoMark />}
              <MemoMapPolygons />
              <MemoMapFlag />
            </Map>
            <div
              style={{
                position: "absolute",
                top: "0px",
                [isPersian ? "left" : "right"]: "0px",
                zIndex: 1,
                borderRadius: "10px",
                width: "33px",
                height: "33px",
                padding: "5px",
              }}
            >

              <ZoomControls
                isPersian={isPersian}
                onZoomChange={handleZoomChange}
              />
              <FullscreenControls
                isPersian={isPersian}
                onToggleFullScreen={toggleFullScreen}
                onToggleMapFullScreen={handleFullscreenToggle}
                isFullScreenMap={isFullScreenMap}
              />
            </div>
          </div>
        </Container>
      </TransactionContext.Provider>
    </AuthMiddleware>
  );
};

export default React.memo(MapTreeD);