import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    setCounter((c) => c + 1);
  };

  const handleSubstact = (e) => {
    setCounter(counter - 1);
  };

  const handleReset = (e) => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <h3>{counter}</h3>
      <button className={"button counter"} onClick={handleAdd}>
        +1
      </button>
      <button className={"button counter"} onClick={handleReset}>
        Reset
      </button>
      <button className={"button counter"} onClick={handleSubstact}>
        -1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export { CounterApp };
