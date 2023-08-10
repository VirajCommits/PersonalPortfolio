import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Avatar } from './Avatar'

const AvatarParent = () => {
    return (
      <Canvas shadows camera={{ position: [0, 3, 3], fov: 50 }}>
        <OrbitControls />
        <group scale={[2, 2, 2]}>
          <Avatar />
        </group>
        <ambientLight intensity={1} />
      </Canvas>
    );
  };
  
  

export default AvatarParent