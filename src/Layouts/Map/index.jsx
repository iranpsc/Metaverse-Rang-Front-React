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
import { ReactComponent as unZoom } from "../../Assets/images/UnZoom.svg";
import { ReactComponent as zoom } from "../../Assets/images/zoom.svg";
import { ReactComponent as fullPage } from "../../Assets/images/fullPage.svg";
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
  ${(props) => {
    const direction = document.body.dir || "ltr";
    return direction === "ltr"
      ? `right: ${!props.isOpen ? "10px" : "0"}`
      : `left: ${!props.isOpen ? "10px" : "0"}`;
  }};
  padding: 3px;
  border-radius: 7px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
`;
const ZoomControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 1;
  border-radius: 10px;
  width: 28px;
  height: 28px;
`;

const UnZoomControlContainer = styled.div`
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
  ${(props) => {
    const direction = document.body.dir || "ltr";
    return direction === "ltr"
      ? `right: ${!props.isOpen ? "10px" : "0"}`
      : `left: ${!props.isOpen ? "10px" : "0"}`;
  }};
  z-index: 1;
  border-radius: 10px;
  width: 33px;
  height: 33px;
  padding: 5px;
  border-radius: 7px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
`;
const FullscreenMapContainer = styled.div`
  position: absolute;
  top: 125px;
  ${(props) => {
    const direction = document.body.dir || "ltr";
    return direction === "ltr"
      ? `right: ${!props.isOpen ? "10px" : "0"}`
      : `left: ${!props.isOpen ? "10px" : "0"}`;
  }};
  z-index: 1;
  border-radius: 10px;
  width: 33px;
  height: 33px;
  padding: 5px;
  border-radius: 7px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
`;

const CustomZoomInButton = styled(zoom)`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  cursor: pointer;
`;
const CustomZoomOutButton = styled(unZoom)`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  cursor: pointer;
`;

const CustomFullscreenButton = styled(fullPage)`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  cursor: pointer;
`;
const CustomFullscreenMapButton = styled(fullPage)`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  cursor: pointer;
  rotate: 45deg;
`;
export const TransactionContext = createContext();
const MapTreeD = () => {
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const { setUserWithToken, setUser } = useAuth();
  const mapRef = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);
  const [isFullScreenMap, setFullScreenMap] = useState(false);
  useEffect(() => {
    if (isFullScreen && screen.orientation) {
      screen.orientation.lock("landscape").catch((error) => {
        console.error("Failed to change to landscape mode:", error);
      });
    }
  }, [isFullScreen]);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
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

  const navigator = useNavigate();
  const [zoomLevel, setZoomLevel] = useState(12);
  const { confirmation, selectedEnvironment, hiddenModel } =
    useSelectedEnvironment();

  const handleZoomIn = () => {
    if (mapRef.current) {
      const newZoomLevel = zoomLevel + 1;
      mapRef.current.zoomTo(newZoomLevel);
      setZoomLevel(newZoomLevel);
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      const newZoomLevel = zoomLevel - 1;
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
        <ZoomContainer>
          <ZoomControlContainer>
            <CustomZoomInButton onClick={handleZoomIn} />
          </ZoomControlContainer>
          <UnZoomControlContainer>
            <CustomZoomOutButton onClick={handleZoomOut} />
          </UnZoomControlContainer>
        </ZoomContainer>
        <FullscreenControlContainer>
          <CustomFullscreenButton onClick={toggleFullScreen} />
        </FullscreenControlContainer>
        <FullscreenMapContainer>
          <CustomFullscreenMapButton onClick={handleFullscreenToggle} />
        </FullscreenMapContainer>
      </Container>
    </TransactionContext.Provider>
  );
};

export default MapTreeD;
