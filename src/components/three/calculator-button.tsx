"use client";

import { useState, useRef, useCallback, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group } from 'three';

interface CalculatorButtonProps {
  position: [number, number, number];
  label: string;
  color?: string;
  hoverColor?: string;
  onClick: () => void;
  width?: number;
  height?: number;
  depth?: number;
}

const CalculatorButtonComponent = ({
  position,
  label,
  color = '#f0f0f0',
  hoverColor = '#d0d0d0',
  onClick,
  width = 1,
  height = 1,
  depth = 0.2,
}: CalculatorButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const buttonRef = useRef<Group>(null);
  
  // Animation for pressed state
  useFrame(() => {
    if (!buttonRef.current) return;
    
    if (pressed) {
      buttonRef.current.position.y = -0.05;
    } else {
      buttonRef.current.position.y = 0;
    }
  });

  const handlePointerDown = useCallback(() => {
    setPressed(true);
  }, []);

  const handlePointerUp = useCallback(() => {
    setPressed(false);
    onClick();
  }, [onClick]);

  const handlePointerOver = useCallback(() => {
    setHovered(true);
  }, []);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    setPressed(false);
  }, []);

  return (
    <group position={position}>
      <group 
        ref={buttonRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        {/* Button body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[width, height, depth]} />
          <meshStandardMaterial 
            color={hovered ? hoverColor : color} 
            roughness={0.5} 
            metalness={0.1}
          />
        </mesh>
        
        {/* Button label */}
        <Text
          position={[0, 0, depth / 2 + 0.01]}
          fontSize={0.5}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </group>
  );
};

export const CalculatorButton = memo(CalculatorButtonComponent);
CalculatorButton.displayName = 'CalculatorButton'; 