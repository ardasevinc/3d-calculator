"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ReactNode } from 'react';

interface SceneProps {
  children?: ReactNode;
}

export const Scene = ({ children }: SceneProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [10, 10, 10],
          fov: 50,
          near: 0.1,
          far: 2000,
        }}
        className="w-full h-full"
        gl={{ 
          antialias: true,
          alpha: false,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance" 
        }}
        shadows
        dpr={[1, 2]}
      >
        {/* Set up lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        
        {/* Set up isometric camera controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          target={[0, 0, 0]}
        />
        
        {/* Render children (calculator components) */}
        {children}
      </Canvas>
    </div>
  );
}; 