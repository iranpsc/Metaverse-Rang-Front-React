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
import { useFrame, useLoader } from "react-three-fiber";
import { Canvas } from "react-three-map/maplibre";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HemisphereLight } from "three";

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

const FBXModel = ({ url, position, rotation }) => {
  const fbx = useLoader(FBXLoader, url);
  const fbxRef = useRef();

  return (
    <group ref={fbxRef} position={position} rotation={rotation}>
      <primitive object={fbx} />
    </group>
  );
};

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
            zoom: 13,
            pitch: 40,
          }}
          mapStyle="/styleMap.json"
          interactiveLayerIds={["polygon-fill-layer"]}
          cursor={cursor}
          onClick={(event) => {
            const feature = event.features[0];
            if (feature.properties.id) {
              navigator(`/metaverse/feature/${feature.properties.id}`);
            }
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onZoomEnd={setZoomLevel}
        >
          {/* <Canvas latitude={36.3264686} longitude={50.0641598}>
            <hemisphereLight
              args={["#ffffff", "#60666C"]}
              position={[1, 4.5, 3]}
            />
            <group scale={[0.1, 0.1, 0.1]}>
              <FBXModel
                url="../../../public/shahid.fbx"
                position={[0, 0.3, 0]}
              />
            </group>
          </Canvas> */}
          {zoomLevel.viewState && zoomLevel.viewState.zoom > 18 && (
            <Canvas
              latitude={36.306433581761794}
              longitude={50.028722140674028}
              zoom={16}
            >
              <hemisphereLight
                args={["#ffffff", "#60666C"]}
                position={[1, 4.5, 3]}
              />
              <group scale={[0.005, 0.005, 0.005]}>
                <FBXModel
                  url="/office.fbx"
                  // position={[10, 100, 100]}
                  rotation={[0, 5.6, 0]} // Rotate 90 degrees around the y-axis
                />
              </group>
            </Canvas>
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
