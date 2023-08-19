import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { Avatar } from "./Avatar";

const AvatarParent = () => {
  const [isTouching, setIsTouching] = useState(false); // State to track touch events

  const handleTouchStart = () => {
    setIsTouching(true);
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        enableRotate={!isTouching}
        enablePan={!isTouching}
      />
      <group scale={[1, 1, 1]} position-y={-1.2}>
        <Avatar onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} />
      </group>
      <ambientLight intensity={2} />
    </Canvas>
  );
};

export default AvatarParent;
