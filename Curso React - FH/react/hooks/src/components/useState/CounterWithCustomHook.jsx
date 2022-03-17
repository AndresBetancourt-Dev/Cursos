import React from "react";
import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Counter with Hook : {counter}</h1>
      <hr />
      <button className="btn btn-blue" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-red" onClick={() => decrement(2)}>
        -1
      </button>
      <button className="btn" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default CounterWithCustomHook;
