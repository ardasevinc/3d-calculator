"use client";

import { useState, useCallback } from 'react';

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

  const clearAll = useCallback(() => {
    setState({
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
    });
  }, []);

  const clearEntry = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      displayValue: '0',
    }));
  }, []);

  const inputDigit = useCallback((digit: string) => {
    setState(prevState => {
      const { displayValue, waitingForOperand } = prevState;
      if (waitingForOperand) {
        return {
          ...prevState,
          displayValue: digit,
          waitingForOperand: false,
        };
      } else {
        return {
          ...prevState,
          displayValue: displayValue === '0' ? digit : displayValue + digit,
        };
      }
    });
  }, []);

  const inputDecimal = useCallback(() => {
    setState(prevState => {
      const { displayValue, waitingForOperand } = prevState;
      if (waitingForOperand) {
        return {
          ...prevState,
          displayValue: '0.',
          waitingForOperand: false,
        };
      }
      if (!displayValue.includes('.')) {
        return {
          ...prevState,
          displayValue: displayValue + '.',
        };
      }
      return prevState;
    });
  }, []);

  const toggleSign = useCallback(() => {
    setState(prevState => {
      const { displayValue } = prevState;
      const newValue = parseFloat(displayValue) * -1;
      return {
        ...prevState,
        displayValue: String(newValue),
      };
    });
  }, []);

  const inputPercent = useCallback(() => {
    setState(prevState => {
      const { displayValue } = prevState;
      const value = parseFloat(displayValue);
      return {
        ...prevState,
        displayValue: String(value / 100),
      };
    });
  }, []);

  const performOperation = useCallback((nextOperation: OperationType) => {
    setState(prevState => {
      const { displayValue, previousValue, operation } = prevState;
      const inputValue = parseFloat(displayValue);

      if (previousValue === null) {
        return {
          ...prevState,
          previousValue: inputValue,
          operation: nextOperation,
          waitingForOperand: true,
        };
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

      return {
        ...prevState,
        displayValue: String(newValue),
        previousValue: nextOperation ? newValue : null,
        operation: nextOperation,
        waitingForOperand: Boolean(nextOperation),
      };
    });
  }, []);

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