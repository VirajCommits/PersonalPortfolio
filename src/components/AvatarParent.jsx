import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Avatar } from "./Avatar";

const AvatarParent = () => {
  const controlsRef = useRef(); // Ref for OrbitControls instance

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    const rect = touch.target.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Calculate the dimensions and position of the avatar
    const avatarLeft = 0; // Adjust these values to match your avatar's position
    const avatarRight = 100;
    const avatarTop = 0;
    const avatarBottom = 100;

    // Check if the touch event occurred over the avatar
    if (x >= avatarLeft && x <= avatarRight && y >= avatarTop && y <= avatarBottom) {
      // Disable camera controls while touch is over the avatar
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
      }
    }
  };

  const handleTouchEnd = () => {
    // Enable camera controls when touch ends
    if (controlsRef.current) {
      controlsRef.current.enabled = true;
    }
  };

  return (
    <Canvas onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <OrbitControls ref={controlsRef} enableZoom = {false} />
      <group scale={[1, 1, 1]} position-y={-1.2}>
        <Avatar />
      </group>
      <ambientLight intensity={2} />
    </Canvas>
  );
};

export default AvatarParent;
