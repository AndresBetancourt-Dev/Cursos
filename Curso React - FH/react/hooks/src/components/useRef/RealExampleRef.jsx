import React, { useState } from "react";
import MultipleCustomHooks from "../useFetch/MultipleCustomHooks";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-5">
      <h1>Real Example Ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-blue"
      >
        Show/Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
