import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { state, increment } = useCounter(0);
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col space-y-5">
      <h1>
        Counter :<Small value={state} />
      </h1>

      <button className="btn btn-blue" onClick={() => increment(1)}>
        +1
      </button>

      <button onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
