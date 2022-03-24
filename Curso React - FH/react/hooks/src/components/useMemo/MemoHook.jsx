import React, { useMemo, useState } from "react";
import useCounter from "../../hooks/useCounter";
const MemoHook = () => {
  const { state, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log("Ahí vamos...");
    }

    return `${iteraciones} iteraciones realizadas`;
  };

  const memoHeavyProcess = useMemo(() => procesoPesado(state), [state]);

  return (
    <div className="flex flex-col space-y-5">
      <h1>Counter : {state}</h1>
      {memoHeavyProcess}
      <button className="btn btn-blue" onClick={() => increment(1)}>
        +1
      </button>

      <button onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
