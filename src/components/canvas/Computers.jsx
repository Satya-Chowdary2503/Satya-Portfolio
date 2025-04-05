import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Html,
  useProgress,
} from "@react-three/drei";

// Loader while the model is loading
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: "white" }}>{progress.toFixed(1)}% loaded</span>
    </Html>
  );
}

// 3D model setup
const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.8} />
      <hemisphereLight intensity={0.5} groundColor="black" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={2.5} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.85} // smaller on mobile
        position={isMobile ? [0, -3, -2] : [0, -3.2, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Canvas wrapper
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        width: isMobile ? "90vw" : "50vw",
        height: isMobile ? "45vh" : "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        marginTop: isMobile ? "1rem" : "2rem",
        marginBottom: isMobile ? "1rem" : "2rem",
      }}
    >
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [10, 2, 5], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
