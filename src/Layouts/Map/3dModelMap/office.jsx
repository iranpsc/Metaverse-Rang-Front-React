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

const Office = () => {
  return (
    <Canvas latitude={36.306433581761794} longitude={50.028722140674028}>
      <hemisphereLight args={["#ffffff", "#60666C"]} position={[1, 4.5, 3]} />
      <group scale={0.0099}>
        <FBXModel
          url="/office.fbx"
          rotation={[0, 5.6, 0]} // Rotate 90 degrees around the y-axis
        />
      </group>
    </Canvas>
  );
};

export default Office;
