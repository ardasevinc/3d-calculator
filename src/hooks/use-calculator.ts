"use client";

import { useState } from 'react';

type OperationType = '+' | '-' | '*' | '/' | null;

interface CalculatorState {
  displayValue: string;
  previousValue: number | null;
  operation: OperationType;
  waitingForOperand: boolean;
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    displayValue: '0',
    previousValue: null,
    operation: null,
    waitingForOperand: false,
  });

  const clearAll = () => {
    setState({
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
    });
  };

  const clearEntry = () => {
    setState({
      ...state,
      displayValue: '0',
    });
  };

  const inputDigit = (digit: string) => {
    const { displayValue, waitingForOperand } = state;

    if (waitingForOperand) {
      setState({
        ...state,
        displayValue: digit,
        waitingForOperand: false,
      });
    } else {
      setState({
        ...state,
        displayValue: displayValue === '0' ? digit : displayValue + digit,
      });
    }
  };

  const inputDecimal = () => {
    const { displayValue, waitingForOperand } = state;

    if (waitingForOperand) {
      setState({
        ...state,
        displayValue: '0.',
        waitingForOperand: false,
      });
      return;
    }

    if (!displayValue.includes('.')) {
      setState({
        ...state,
        displayValue: displayValue + '.',
      });
    }
  };

  const toggleSign = () => {
    const { displayValue } = state;
    const newValue = parseFloat(displayValue) * -1;

    setState({
      ...state,
      displayValue: String(newValue),
    });
  };

  const inputPercent = () => {
    const { displayValue } = state;
    const value = parseFloat(displayValue);
    
    setState({
      ...state,
      displayValue: String(value / 100),
    });
  };

  const performOperation = (nextOperation: OperationType) => {
    const { displayValue, previousValue, operation } = state;
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setState({
        ...state,
        previousValue: inputValue,
        operation: nextOperation,
        waitingForOperand: true,
      });
      return;
    }

    let newValue: number;
    if (operation === '+') {
      newValue = previousValue + inputValue;
    } else if (operation === '-') {
      newValue = previousValue - inputValue;
    } else if (operation === '*') {
      newValue = previousValue * inputValue;
    } else if (operation === '/') {
      newValue = previousValue / inputValue;
    } else {
      newValue = inputValue;
    }

    setState({
      ...state,
      displayValue: String(newValue),
      previousValue: nextOperation ? newValue : null,
      operation: nextOperation,
      waitingForOperand: Boolean(nextOperation),
    });
  };

  return {
    displayValue: state.displayValue,
    clearAll,
    clearEntry,
    inputDigit,
    inputDecimal,
    toggleSign,
    inputPercent,
    performOperation,
  };
}; 