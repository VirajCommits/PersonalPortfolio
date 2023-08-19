import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Avatar } from "./Avatar";

const AvatarParent = () => {
  const cameraRef = useRef(); // Ref for camera
  const [touchStartPosition, setTouchStartPosition] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStartPosition(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    if (touchStartPosition !== null) {
      const deltaY = touchStartPosition - event.touches[0].clientY;
      const currentPosition = cameraRef.current.position;
      cameraRef.current.position.set(currentPosition.x, currentPosition.y + deltaY * 0.01, currentPosition.z);
      setTouchStartPosition(event.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartPosition(null);
  };

  return (
    <Canvas
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <perspectiveCamera ref={cameraRef} position={[0, 2, 3]} fov={40} />
      <OrbitControls enableZoom={false} />
      <group scale={[1, 1, 1]} position-y={-1.2}>
        <Avatar />
      </group>
      <ambientLight intensity={2} />
    </Canvas>
  );
};

export default AvatarParent;
