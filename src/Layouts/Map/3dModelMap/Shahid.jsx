import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { Canvas } from "react-three-map/maplibre";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HemisphereLight } from "three";

const FBXModel = ({ url, position, rotation }) => {
  const fbx = useLoader(FBXLoader, url);
  const fbxRef = useRef();

  return (
    <group ref={fbxRef} position={position} rotation={rotation}>
      <primitive object={fbx} />
    </group>
  );
};

const Shahid = () => {
  return (
    <Canvas latitude={36.3264686} longitude={50.0641598}>
      <hemisphereLight args={["#ffffff", "#60666C"]} position={[1, 4.5, 3]} />
      <group scale={0.0099}>
        <FBXModel url="./shahid.fbx" />
      </group>
    </Canvas>
  );
};

export default Shahid;
