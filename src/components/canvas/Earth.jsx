import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";  // Canvas comes from fiber
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";


const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf"); // Leading slash means "public" folder


  return (
    <primitive 
      object={earth.scene} 
      scale={2.5} 
      position={[0, 0, 0]} 
      rotation={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={
        <Html center>
          <div className="text-white">Loading Earth...</div>
        </Html>
      }>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;