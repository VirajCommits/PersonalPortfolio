import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Avatar } from "./Avatar";

const AvatarParent = () => {
  const cameraRef = useRef(); // Ref for camera
  const [enableControls, setEnableControls] = useState(true); // State to enable/disable controls

  const handleTouchStart = () => {
    setEnableControls(false); // Disable controls when touch starts
  };

  const handleTouchEnd = () => {
    setEnableControls(true); // Enable controls when touch ends
  };

  return (
    <Canvas
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <perspectiveCamera ref={cameraRef} position={[0, 2, 3]} fov={40} />
      <OrbitControls enableZoom={false} enabled={enableControls} />
      <group scale={[1, 1, 1]} position-y={-1.2}>
        <Avatar />
      </group>
      <ambientLight intensity={2} />
    </Canvas>
  );
};

export default AvatarParent;
