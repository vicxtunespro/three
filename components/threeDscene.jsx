"use client"
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function MyThreeJsScene() {
  return (
    <Canvas className='flex h-[100vh] justify-center items-center'>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={(mesh) => {
        mesh.rotation.x = Math.PI / 2;
      }}>
        <boxGeometry args={[4, 4, 4]} />
        <meshBasicMaterial color="blue" />
      </mesh>
    </Canvas>
  );
}

export default MyThreeJsScene;