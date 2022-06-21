import Link from "next/link";
/**
 * Next Link it's the built in Link component to allow SPA
 */
import React, { Fragment } from "react";

/**
 * 404 Page
 */
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
