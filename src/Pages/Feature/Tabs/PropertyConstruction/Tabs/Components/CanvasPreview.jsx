import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HemisphereLight } from "three";
extend({ OrbitControls });

const Model = ({ link }) => {
  const fbxRef = useRef();
  const [model, setModel] = useState(null);

  // Load the FBX model
  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(link, (fbx) => {
      setModel(fbx);
    });
  }, [link]);

  // Set up orbit controls
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.09;
    controls.rotateSpeed = 0.5;
    controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation
    controls.minDistance = 1; // Minimum zoom distance
    controls.maxDistance = 10; // Maximum zoom distance
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  // Rotate the model
  useFrame(() => {
    if (fbxRef.current) {
      fbxRef.current.rotation.y += 0.01;
    }
  });

  return model ? (
    <primitive
      ref={fbxRef}
      object={model}
      scale={0.002}
      position={[0, -3.5, 0]}
    />
  ) : null;
};

const CanvasPreview = ({ link }) => {
  return (
    <Canvas>
      <ambientLight />
      <hemisphereLight args={["#ffffff", "#60666C"]} />
      <Model link={link} />
    </Canvas>
  );
};

export default CanvasPreview;
