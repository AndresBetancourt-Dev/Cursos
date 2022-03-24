import React, { memo } from "react";

const Small = memo(({ value }) => {
  console.log("Small Renderizado");
  return <small>{value}</small>;
});

export default Small;
