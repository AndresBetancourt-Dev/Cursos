import React from "react";
import { useState } from "react";
import "./counter.css";

const UseStateApp = () => {
  const [{ counterOne, counterTwo }, setCounter] = useState({
    counterOne: 0,
    counterTwo: 20,
  });

  const [state, setState] = useState({
    counterThree: 0,
    counterFour: 40,
  });

  const { counterThree, counterFour } = state;

  return (
    <>
      <h2 className="text-slate-500 font-sans font-black">
        Count One : {counterOne}
      </h2>
      <h2 className="text-slate-500 font-sans font-black">
        Count Two : {counterTwo}
      </h2>
      <h2 className="text-slate-500 font-sans font-black">
        Count One : {counterThree}
      </h2>
      <h2 className="text-slate-500 font-sans font-black">
        Count One : {counterFour}
      </h2>
      <button
        className="btn btn-blue"
        onClick={() => {
          setCounter((counter) => ({
            ...counter,
            counterOne: counterOne + 1,
          }));
          setState({ ...state, counterThree: counterThree + 1 });
        }}
      >
        +1
      </button>
    </>
  );
};

export default UseStateApp;
