import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Avatar } from "./Avatar";

const AvatarParent = () => {
  const cameraRef = useRef(); // Ref for camera
  const [isTouching, setIsTouching] = useState(false); // State to track touch events

  const handleTouchStart = () => {
    setIsTouching(true);
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  const handleWindowTouchStart = () => {
    if (!isTouching) {
      // Disable OrbitControls rotation and panning when touching the avatar
      cameraRef.current.userData.controls.enabled = false;
    }
  };

  const handleWindowTouchEnd = () => {
    if (!isTouching) {
      // Re-enable OrbitControls rotation and panning
      cameraRef.current.userData.controls.enabled = true;
    }
  };

  React.useEffect(() => {
    window.addEventListener("touchstart", handleWindowTouchStart);
    window.addEventListener("touchend", handleWindowTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleWindowTouchStart);
      window.removeEventListener("touchend", handleWindowTouchEnd);
    };
  }, [isTouching]);

  return (
    <Canvas>
      <perspectiveCamera ref={cameraRef} position={[0, 2, 3]} fov={40} userData={{ controls: null }}>
        <OrbitControls ref={(controls) => (cameraRef.current.userData.controls = controls)} />
      </perspectiveCamera>
      <group scale={[1, 1, 1]} position-y={-1.2}>
        <Avatar onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} />
      </group>
      <ambientLight intensity={2} />
    </Canvas>
  );
};

export default AvatarParent;
