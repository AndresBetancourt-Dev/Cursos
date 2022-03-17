import { useState } from "react";

const useCounter = (initialState = 0) => {
  const [state, setState] = useState(initialState);
  const increment = (factor = 1) => {
    setState(state + factor);
  };
  const decrement = (factor = 1) => {
    setState(state - factor);
  };

  const reset = () => {
    setState(initialState);
  };
  return {
    state,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
