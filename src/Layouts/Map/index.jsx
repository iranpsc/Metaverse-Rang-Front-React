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
import Map, {
  FullscreenControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useNavigate } from "react-router-dom";
import Mark from "./3dModelMap/Mark";
import { useSelectedEnvironment } from "../../Services/Reducers/SelectedEnvironmentContext";

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
  useEffect(() => {
    setUserWithToken();
  }, []);
  const navigator = useNavigate();
  const [zoomLevel, setZoomLevel] = useState(18);
  const { confirmation, selectedEnvironment, hiddenModel } =
    useSelectedEnvironment();
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
          mapStyle="./styleMap.json"
          style={{ borderRadius: "15px" }}
          interactiveLayerIds={["polygon-fill-layer"]}
          cursor={cursor}
          onClick={(event) => {
            const feature = event.features[0];
            if (feature.properties.id) {
              navigator(`/metaverse/feature/${feature.properties.id}`);
            }
          }}
          onZoomEnd={setZoomLevel}
          RTLTextPlugin="https://map.irpsc.com/rtl.js"
          maxPitch={78}
        >
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />

          {confirmation && selectedEnvironment && !hiddenModel && <Mark />}

          <MapPolygons />
          <MapFlag />
        </Map>
      </Container>
    </TransactionContext.Provider>
  );
};

export default MapTreeD;
