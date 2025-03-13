"use client";

import { useCalculator } from '@/hooks/use-calculator';
import { CalculatorButton } from './calculator-button';
import { Scene } from './scene';
import { Text } from '@react-three/drei';
import { Suspense, useCallback } from 'react';

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

  const getOnClick = useCallback((label: string) => {
    switch (label) {
      case 'C':
        return clearAll;
      case 'CE':
        return clearEntry;
      case '±':
        return toggleSign;
      case '%':
        return inputPercent;
      case '.':
        return inputDecimal;
      case '=':
        return () => performOperation(null);
      case '+':
      case '-':
      case '*':
      case '/':
        return () => performOperation(label as '+' | '-' | '*' | '/');
      default:
        return () => inputDigit(label);
    }
  }, [clearAll, clearEntry, inputDecimal, inputDigit, inputPercent, performOperation, toggleSign]);

  const CalculatorContent = () => (
    <group position={[0, 0, 0]}>
      {/* Calculator body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[6, 8, 0.5]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Display */}
      <mesh position={[0, 3, 0.26]} castShadow receiveShadow>
        <boxGeometry args={[5, 1.5, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Display text */}
      <Text
        position={[2, 3, 0.35]}
        fontSize={0.8}
        color="white"
        anchorX="right"
        anchorY="middle"
      >
        {displayValue}
      </Text>

      {/* Buttons */}
      {buttonLayout.map((row, rowIndex) =>
        row.map((label, colIndex) => {
          const x = (colIndex - 1.5) * 1.5;
          const y = (1.5 - rowIndex) * 1.5;
          const isOperator = ['+', '-', '*', '/', '='].includes(label);
          const isClear = label === 'C' || label === 'CE';

          return (
            <CalculatorButton
              key={`${rowIndex}-${colIndex}`}
              position={[x, y, 0.26]}
              label={label}
              color={isOperator ? '#ff9500' : isClear ? '#a5a5a5' : '#f0f0f0'}
              hoverColor={isOperator ? '#ffaa33' : isClear ? '#b5b5b5' : '#e0e0e0'}
              onClick={getOnClick(label)}
              width={1.2}
              height={1.2}
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