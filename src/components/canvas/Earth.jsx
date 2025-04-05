import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";  
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("/planet/scene.gltf"); // Adjusted path

  return (
    <primitive 
      object={earth.scene} 
      scale={isMobile ? 1.8 : 2.5} 
      position={[0, 0, 0]} 
      rotation={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
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
          autoRotateSpeed={0.5}  // Reduced speed for better control
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
