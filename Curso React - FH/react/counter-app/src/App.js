import React, { Fragment } from "react";
import PropTypes from "prop-types";

//Functional Compontent

const App = ({
  info,
  react: { title },
  java,
  redux: {
    title: { reduxTitle },
  },
  subtitle,
}) => {
  const message = `The use of the best technologies, Node.js, React & Redux`;
  const utils = {
    sideText: "Wil be forever",
    elementBackground: "image",
    enabled: false,
    React: title,
    Java: java ? "Will course the spring boot course" : "Not yet",
    Redux: reduxTitle,
    SpringBoot: info,
  };

  return (
    <Fragment>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{info}</h3>
      <h4>{message}</h4>
      <pre>{JSON.stringify(utils, null, 4)}</pre>
    </Fragment>
  );
};

App.propTypes = {
  info: PropTypes.string.isRequired,
  react: PropTypes.object.isRequired,
  java: PropTypes.bool.isRequired,
};

App.defaultProps = {
  subtitle: "I will be the best programmer",
};

export default App;
