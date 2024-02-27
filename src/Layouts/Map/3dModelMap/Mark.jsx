import React, { useState, useEffect, useRef } from "react";
import { Marker, useMap } from "react-map-gl";
import { levaStore, useControls } from "leva";
import { useFrame, useLoader } from "react-three-fiber";
import { Canvas, Coordinates } from "react-three-map/maplibre";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HemisphereLight } from "three";
import { Suspense } from "react";
import { useSelectedEnvironment } from "../../../Services/Reducers/SelectedEnvironmentContext";
import styled from "styled-components";

const FBXModel = ({ url, position, rotation }) => {
  const fbx = useLoader(FBXLoader, url);
  const fbxRef = useRef();

  return (
    <group ref={fbxRef} rotation={rotation} scale={0.0099}>
      <hemisphereLight args={["#ffffff", "#60666C"]} position={[1, 4.5, 3]} />
      <primitive object={fbx} />
    </group>
  );
};
const BtnOpenCloseMenu = styled.button`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.inputBorder};
  position: absolute;
  right: 0;
  top: -150px;
  z-index: 100;
  border: none;
`;
const Mark = () => {
  const { selectedEnvironment, toggleConfirmation } = useSelectedEnvironment();
  console.log(selectedEnvironment);
  const { rotationX, setRotationX } = useControls({
    rotationX: {
      value: 0,
      min: 0,
      max: 360,
      step: 1,
    },
  });
  const map = useMap();
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 36.3065335817618,
    longitude: 50.026222140673994,
  });

  useEffect(() => {
    const onMapMove = () => {
      const center = map.current.getCenter();
      setMarkerPosition({
        latitude: center.lat,
        longitude: center.lng,
      });
    };

    map.current.on("move", onMapMove);

    return () => {
      map.current.off("move", onMapMove);
    };
  }, [map]);

  return (
    <Marker
      latitude={markerPosition.latitude}
      longitude={markerPosition.longitude}
    >
      <BtnOpenCloseMenu onClick={() => toggleConfirmation()}>
        1
      </BtnOpenCloseMenu>
      <Suspense fallback={null}>
        <Canvas
          latitude={markerPosition.latitude}
          longitude={markerPosition.longitude}
        >
          <FBXModel
            url={selectedEnvironment[0].file.url}
            key={2}
            rotation={[0, (rotationX * Math.PI) / 180, 0]}
          />
        </Canvas>
      </Suspense>
    </Marker>
  );
};

export default Mark;