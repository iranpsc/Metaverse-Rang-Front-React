import React, {
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { createContext } from "react";

import MapPolygons from "./MapPolygons";
import Main from "../Main";
import useAuth from "../../Services/Hooks/useAuth";
import MapFlag from "./MapFlag";
import AdviserIcon from "./Adviser";
import flyToPosition from "./FlyToGift";
import ContextMenu from "./ContextMenu/ContextMenu";
import ToolTip from "../../Components/Tooltip";
import Routes from "./Routers";
import useRequest from "../../Services/Hooks/useRequest";

import LocationPin from "../../Assets/gif/location-pin.gif";
import BtnFlagMap from "./BtnFlagMap";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useNavigate } from "react-router-dom";
import Shahid from "./3dModelMap/Shahid";
import Office from "./3dModelMap/office";

const IconFlyTo = styled.img`
  position: absolute;
  z-index: 500;
  top: 56%;
  right: 0px;
  width: 100px;
  aspect-ratio: 1/1;
  cursor: pointer;
  @media (min-width: 1536px) {
    top: 50%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;

  @media (min-width: 1024px) {
    border-radius: 20px;
  }
`;
export const TransactionContext = createContext();

const MapTreeD = () => {
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const [cursor, setCursor] = useState("-webkit-grab");
  const { setUserWithToken } = useAuth();
  const { Request } = useRequest();
  useEffect(() => {
    setUserWithToken();
  }, []);
  const navigator = useNavigate();
  const onMouseEnter = useCallback(() => setCursor("pointer"), []);
  const onMouseLeave = useCallback(() => setCursor("-webkit-grab"), []);
  const [zoomLevel, setZoomLevel] = useState(18);

  return (
    <TransactionContext.Provider
      value={{ selectedTransaction, setSelectedTransaction }}
    >
      <Container>
        {/* 
          <Main />
          <ContextMenu />
          <AdviserIcon />  
    */}
        <Map
          className="map"
          antialias
          initialViewState={{
            latitude: 36.32,
            longitude: 50.02,
            zoom: 12,
            pitch: 40,
          }}
          mapStyle="/styleMap.json"
          interactiveLayerIds={["polygon-fill-layer"]}
          // cursor={cursor}
          // onClick={(event) => {
          //   const feature = event.features[0];
          //   if (feature.properties.id) {
          //     navigator(`/metaverse/feature/${feature.properties.id}`);
          //   }
          // }}
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          onZoomEnd={setZoomLevel}
          // RTLTextPlugin={{
          //   workerUrl: "https://map.irpsc.com/rtl.js",
          // }}
        >
          {zoomLevel.viewState && zoomLevel.viewState.zoom >= 16 && (
            <>
              <Office />
            </>
          )}
          {zoomLevel.viewState && zoomLevel.viewState.zoom >= 16.5 && (
            <>
              <Shahid />
            </>
          )}
          <MapPolygons />
          <MapFlag />
        </Map>
        <Routes />
      </Container>
    </TransactionContext.Provider>
  );
};

export default MapTreeD;
