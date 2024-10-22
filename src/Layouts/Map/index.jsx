import React, { useState, useEffect, useRef, createContext } from "react";
import styled from "styled-components";
import useAuth from "../../Services/Hooks/useAuth";
import MapPolygons from "./MapPolygons";
import MapFlag from "./MapFlag";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useNavigate } from "react-router-dom";
import Mark from "./3dModelMap/Mark";
import { useSelectedEnvironment } from "../../Services/Reducers/SelectedEnvironmentContext";
import { ReactComponent as UnZoomIcon } from "../../Assets/images/UnZoom.svg";
import { ReactComponent as ZoomIcon } from "../../Assets/images/zoom.svg";
import { ReactComponent as FullPageIcon } from "../../Assets/images/fullPage.svg";
import { useLanguage } from "../../Services/Reducers/LanguageContext";

// Styled components
const Container = styled.div`
  width: 101%;
  height: 100%;
  position: relative;
  border-radius: 10px;

  @media (min-width: 1024px) {
    border-radius: 20px;
  }
`;

const ZoomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-direction: column;
  position: absolute;
  top: 10px;
  ${(props) => (props.isPersian ? "left" : "right")}: 10px;
  padding: 3px;
  border-radius: 7px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 1;
  border-radius: 10px;
  width: 28px;
  height: 28px;
`;

const FullscreenControlContainer = styled.div`
  position: absolute;
  top: 85px;
  ${(props) => (props.isPersian ? "left" : "right")}: 10px;
  z-index: 1;
  border-radius: 10px;
  width: 33px;
  height: 33px;
  padding: 5px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
`;

const CustomButton = styled.div`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  cursor: pointer;
`;

export const TransactionContext = createContext();

const MapTreeD = () => {
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const { setUserWithToken, setUser } = useAuth();
  const mapRef = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);
  const [isFullScreenMap, setFullScreenMap] = useState(false);
  const navigator = useNavigate();
  const [zoomLevel, setZoomLevel] = useState(12);
  const { confirmation, selectedEnvironment, hiddenModel } =
    useSelectedEnvironment();
  const isPersian = useLanguage();

  useEffect(() => {
    if (isFullScreen && screen.orientation) {
      screen.orientation.lock("landscape-primary").catch(console.error);
    }
  }, [isFullScreen]);

  const toggleFullScreen = () => {
    const docElement = document.documentElement;
    if (!isFullScreen) {
      docElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has("token") && queryParams.has("expires_at")) {
      const queryParamsObject = {
        token: queryParams.get("token"),
        automatic_logout: queryParams.get("expires_at"),
      };
      setUser(queryParamsObject).then(() => {
        navigator("/metaverse");
        setUserWithToken();
      });
    } else {
      setUserWithToken();
    }
  }, []);

  const handleZoomChange = (delta) => {
    if (mapRef.current) {
      const newZoomLevel = zoomLevel + delta;
      mapRef.current.zoomTo(newZoomLevel);
      setZoomLevel(newZoomLevel);
    }
  };

  const handleFullscreenToggle = () => {
    if (!isFullScreenMap) {
      mapRef.current.getMap().getContainer().requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullScreenMap(!isFullScreenMap);
  };

  return (
    <TransactionContext.Provider
      value={{ selectedTransaction, setSelectedTransaction }}
    >
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
          onClick={(event) => {
            const feature = event.features[0];
            if (feature.properties.id) {
              navigator(`/metaverse/feature/${feature.properties.id}`);
            }
          }}
          onZoomEnd={(e) => setZoomLevel(e.viewState.zoom)}
          RTLTextPlugin="https://map.irpsc.com/rtl.js"
          maxPitch={78}
          ref={mapRef}
        >
          {confirmation && selectedEnvironment && !hiddenModel && <Mark />}
          <MapPolygons />
          <MapFlag />
        </Map>
        <ZoomContainer isPersian={isPersian}>
          <ControlContainer>
            <CustomButton as={ZoomIcon} onClick={() => handleZoomChange(1)} />
          </ControlContainer>
          <ControlContainer>
            <CustomButton
              as={UnZoomIcon}
              onClick={() => handleZoomChange(-1)}
            />
          </ControlContainer>
        </ZoomContainer>
        <FullscreenControlContainer isPersian={isPersian}>
          <CustomButton as={FullPageIcon} onClick={toggleFullScreen} />
        </FullscreenControlContainer>
        <FullscreenControlContainer
          style={{ top: "125px" }}
          isPersian={isPersian}
        >
          <CustomButton
            as={FullPageIcon}
            style={{ transform: "rotate(45deg)" }}
            onClick={handleFullscreenToggle}
          />
        </FullscreenControlContainer>
      </Container>
    </TransactionContext.Provider>
  );
};

export default MapTreeD;
