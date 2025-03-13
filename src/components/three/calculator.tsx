"use client";

import { useCalculator } from '@/hooks/use-calculator';
import { CalculatorButton } from './calculator-button';
import { Scene } from './scene';
import { Text } from '@react-three/drei';
import { Suspense } from 'react';

export const Calculator = () => {
  const {
    displayValue,
    clearAll,
    clearEntry,
    inputDigit,
    inputDecimal,
    toggleSign,
    inputPercent,
    performOperation,
  } = useCalculator();

  const buttonLayout = [
    ['C', 'CE', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', '.', '='],
  ];

  const CalculatorContent = () => (
    <group position={[0, 0, 0]}>
      {/* Calculator body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5.6, 7.6, 0.5]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Display */}
      <mesh position={[0, 3, 0.26]} castShadow receiveShadow>
        <boxGeometry args={[4.8, 1.2, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Display text */}
      <Text
        position={[1.8, 3, 0.35]}
        fontSize={0.7}
        color="white"
        anchorX="right"
        anchorY="middle"
        maxWidth={4}
      >
        {displayValue}
      </Text>

      {/* Buttons */}
      {buttonLayout.map((row, rowIndex) =>
        row.map((label, colIndex) => {
          const x = (colIndex - 1.5) * 1.2;
          const y = (1.5 - rowIndex) * 1.2;
          const isOperator = ['+', '-', '*', '/', '='].includes(label);
          const isClear = label === 'C' || label === 'CE';

          const handleClick = () => {
            switch (label) {
              case 'C':
                clearAll();
                break;
              case 'CE':
                clearEntry();
                break;
              case '±':
                toggleSign();
                break;
              case '%':
                inputPercent();
                break;
              case '.':
                inputDecimal();
                break;
              case '=':
                performOperation(null);
                break;
              case '+':
              case '-':
              case '*':
              case '/':
                performOperation(label as '+' | '-' | '*' | '/');
                break;
              default:
                inputDigit(label);
            }
          };

          return (
            <CalculatorButton
              key={`${rowIndex}-${colIndex}`}
              position={[x, y, 0.26]}
              label={label}
              color={isOperator ? '#ff9500' : isClear ? '#a5a5a5' : '#f0f0f0'}
              hoverColor={isOperator ? '#ffaa33' : isClear ? '#b5b5b5' : '#e0e0e0'}
              onClick={handleClick}
              width={1}
              height={1}
              depth={0.3}
            />
          );
        })
      )}
    </group>
  );

  return (
    <Suspense fallback={<div className="w-full h-full bg-gray-200" />}>
      <Scene>
        <CalculatorContent />
      </Scene>
    </Suspense>
  );
}; 