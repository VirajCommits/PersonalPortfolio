import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Avatar } from "./Avatar";

const AvatarParent = () => {

  return (
    <Canvas shadows camera={{ position: [0, 2, 3], fov: 40 }}>
      <OrbitControls enableZoom = {false} enablePan = {false} enableDamping = {false}  />
      <group scale={[1, 1, 1]} position-y={-1.2}>
        <Avatar />
      </group>
      <ambientLight intensity={2} />
    </Canvas>
  );
};

export default AvatarParent;
