import React, { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  /**
   * Se crea una nueva funcion y apesar de usar memo siempre se vuelve a disparar
   */

  /*  const increment = () => {
    setCounter(counter + 1);
  }; */

  const increment = useCallback(
    (num = 1) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {
    console.log("Me renderizo una vez, porque no re-genera la función");
  }, [increment]);

  return (
    <div>
      <h1>CallbackHook : {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
