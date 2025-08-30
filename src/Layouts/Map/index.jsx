import React, { useState, useRef, createContext, useCallback } from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import MapPolygons from "./MapPolygons";
import MapFlag from "./MapFlag";
import Mark from "./3dModelMap/Mark";
import { useSelectedEnvironment } from "../../Services/Reducers/SelectedEnvironmentContext";
import { useLanguage } from "../../Services/Reducers/LanguageContext";

import AuthMiddleware from "../../middleware/AuthMiddleware.jsx";
import ZoomControls from "../../Components/ZoomControls";
import FullscreenControls from "../../Components/FullscreenControls";

export const TransactionContext = createContext();

const MapTreeD = () => {
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const mapRef = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);
  const [isFullScreenMap, setFullScreenMap] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(12);
  const { confirmation, selectedEnvironment, hiddenModel } = useSelectedEnvironment();
  const isPersian = useLanguage();
  const navigate = useNavigate();

  const handleZoomChange = useCallback((delta) => {
    if (mapRef.current) {
      const newZoomLevel = zoomLevel + delta;
      mapRef.current.zoomTo(newZoomLevel);
      setZoomLevel(newZoomLevel);
    }
  }, [zoomLevel]);

  const handleFullscreenToggle = useCallback(() => {
    if (!isFullScreenMap) {
      mapRef.current.getMap().getContainer().requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullScreenMap(!isFullScreenMap);
  }, [isFullScreenMap]);

  const toggleFullScreen = useCallback(() => {
    const docElement = document.documentElement;
    if (!isFullScreen) {
      docElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setFullScreen(!isFullScreen);
  }, [isFullScreen]);

  const handleMapClick = useCallback((event) => {
    const feature = event.features[0];
    if (feature?.properties?.id) {
      navigate(`/metaverse/feature/${feature.properties.id}`);
    }
  }, [navigate]);

  const handleZoomEnd = useCallback((e) => {
    setZoomLevel(e.viewState.zoom);
  }, []);

  React.useEffect(() => {
    if (isFullScreen && screen.orientation) {
      screen.orientation.lock("landscape-primary").catch(console.error);
    }
  }, [isFullScreen]);

  return (
    <AuthMiddleware>
      <TransactionContext.Provider value={{ selectedTransaction, setSelectedTransaction }}>
        <Container>
          <Map
            className="map"
            antialias
            initialViewState={{
              latitude: 36.32,
              longitude: 50.02,
              zoom: 12,
              pitch: 40,
            }}
            mapStyle="./styleMap.json"
            style={{ borderRadius: "15px" }}
            interactiveLayerIds={["polygon-fill-layer"]}
            onClick={handleMapClick}
            onZoomEnd={handleZoomEnd}
            RTLTextPlugin="https://map.irpsc.com/rtl.js"
            maxPitch={78}
            ref={mapRef}
          >
            {confirmation && selectedEnvironment && !hiddenModel && <Mark />}
            <MapPolygons />
            <MapFlag />
          </Map>
          
          <ZoomControls 
            isPersian={isPersian} 
            onZoomChange={handleZoomChange}
          />
          
          <FullscreenControls 
            isPersian={isPersian}
            onToggleFullScreen={toggleFullScreen}
            onToggleMapFullScreen={handleFullscreenToggle}
          />
        </Container>
      </TransactionContext.Provider>
    </AuthMiddleware>
  );
};

export default React.memo(MapTreeD);
