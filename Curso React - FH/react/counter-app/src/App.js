import React, { Fragment } from "react";

//Functional Compontent

const App = (props) => {
  console.log(props);

  const title = `High Availabilty`;
  const message = `The use of the best technologies, Node.js, React & Redux`;
  const utils = {
    sideText: "Wil be forever",
    elementBackground: "image",
    enabled: false,
    React: true,
    Java: true,
    Redux: false,
    SpringBoot: props.info,
  };

  return (
    <Fragment>
      <h1>{title}</h1>
      <h4>{message}</h4>
      <pre>{JSON.stringify(utils, null, 4)}</pre>
    </Fragment>
  );
};

export default App;
