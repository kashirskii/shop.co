import { useState } from "react";

export interface UseCounterReturn {
  value: number;
  decrement: (value?: number) => void;
  increment: (value?: number) => void;
}

export interface UseCounterParams {
  initialValue?: number;
  min?: number;
  max?: number;
}

export const useCounter = ({
  initialValue = 0,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
}: UseCounterParams) => {
  const [value, setValue] = useState(initialValue);

  const decrement = (value: number = 1) => {
    setValue((prevValue) => {
      if (prevValue === min) return prevValue;
      return Math.min(Math.max(min, prevValue - value), max);
    });
  };

  const increment = (value: number = 1) => {
    setValue((prevValue) => {
      if (prevValue === max) return prevValue;
      return Math.max(Math.min(max, prevValue + value), min);
    });
  };

  return { value, decrement, increment } as UseCounterReturn;
};
