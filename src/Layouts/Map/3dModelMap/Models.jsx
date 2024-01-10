import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { Canvas, Coordinates } from "react-three-map/maplibre";
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

const Models = () => {
  return (
    <Canvas latitude={36.327383} longitude={50.063924}>
      <Coordinates latitude={36.327383} longitude={50.063924}>
        <hemisphereLight args={["#ffffff", "#60666C"]} position={[1, 4.5, 3]} />
        <group scale={0.0099}>
          <FBXModel url="./shahid.fbx" />
        </group>
      </Coordinates>
      <Coordinates latitude={36.306468} longitude={50.028717}>
        <hemisphereLight args={["#ffffff", "#60666C"]} position={[1, 4.5, 3]} />
        <group scale={0.0099}>
          <FBXModel
            url="/office.fbx"
            rotation={[0, 5.6, 0]}
            // Rotate 90 degrees around the y-axis
          />
        </group>
      </Coordinates>
    </Canvas>
  );
};

export default Models;
