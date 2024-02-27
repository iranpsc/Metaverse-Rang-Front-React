import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { Canvas, Coordinates } from "react-three-map/maplibre";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HemisphereLight } from "three";
import { levaStore, useControls } from "leva";
import { Marker, useMap } from "react-map-gl";

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

const Models = () => {
  return (
    <>
      <Canvas latitude={36.306433581761794} longitude={50.028722140674028}>
        <Coordinates latitude={306433581761794} longitude={50.028722140674028}>
          <FBXModel url="/office.fbx" />
        </Coordinates>
        <Coordinates
          latitude={36.306133581761785}
          longitude={50.03122214067414}
          key={1}
        >
          <FBXModel url="./1.fbx" key={1} />
        </Coordinates>
        <Coordinates
          latitude={36.30493358176175}
          longitude={50.02872214067409}
          key={2}
        >
          <FBXModel url="./2.fbx" key={2} />
        </Coordinates>

        <Coordinates
          latitude={36.30723358176179}
          longitude={50.028122140674085}
        >
          <FBXModel url="./shahid.fbx" />
        </Coordinates>
      </Canvas>
    </>
  );
};

export default Models;
