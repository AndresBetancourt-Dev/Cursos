import "styled-components/macro";
import React from "react";
import Form from "./components/Form";
import { GlobalStyles } from "./styles/global.styles";

const App = () => {
  return (
    <div padding={{padding : '2rem'}}>
      <GlobalStyles/>
      <h2>attrs method</h2>
      <Form/>
    </div>
  );
};

export default App;
