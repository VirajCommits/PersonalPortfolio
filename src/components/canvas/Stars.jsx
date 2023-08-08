import React,{Suspense,useState,useRef} from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { Points,Preload,PointMaterial } from '@react-three/drei'
import CanvasLoader from '../Loader'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = () => {
  const ref = useRef();
  
  return (
    <div>Stars</div>
  )
}
const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]  ">
      <Canvas camera={{position :[0,0,1]}} />
      <Suspense fallback = {null} > <Stars/> </Suspense>
      <Preload all />
    </div>
  )
}
export default Stars