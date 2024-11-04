"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { motion } from "framer-motion-3d"
import { Button } from "./ui/button";

// Custom component to load the 3D model
function Model({ url }) {
  const { scene } = useGLTF(url); // Load the 3D model
  return <primitive object={scene} />;
}

export default function TDScene() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw"}}>
        {/* Set the background of the scene */}
        <color attach="background" args={['orange']} />

        {/* Add ambient lighting */}
        <ambientLight intensity={1} />

        {/* Add orbit controls */}
        <OrbitControls />

        {/* Load and place the 3D object */}
        <motion.group
          animate={{
            scale: [1, 1.5, 1], // Animation: scale up and down
            rotateY: [0, Math.PI * 2], // Rotate 360 degrees on Y axis
          }}
          transition={{
            duration: 3, // Animation duration
            repeat: Infinity, // Repeat forever
            repeatType: "loop", // Loop animation
          }}
        >
          <Model url="/sample.glb" />  {/* Replace with your file path */}
        </motion.group>
    </Canvas>
  );
}

// This hook will allow us to preload the model
useGLTF.preload("/sample.glb");
