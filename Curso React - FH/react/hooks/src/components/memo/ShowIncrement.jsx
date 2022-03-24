import React, { memo } from "react";

const ShowIncrement = memo(({ increment }) => {
  console.log("Me renderice el botón");
  return (
    <button
      className="btn btn-blue"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

export default ShowIncrement;
