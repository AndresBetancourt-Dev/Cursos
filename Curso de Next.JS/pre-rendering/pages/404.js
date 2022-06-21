import Link from "next/link";
import React, { Fragment } from "react";

const _404 = () => {
  return (
    <Fragment>
      <strong>Not Found</strong>
      <br></br>
      <Link href={"/"}>Home</Link>
    </Fragment>
  );
};

export default _404;
