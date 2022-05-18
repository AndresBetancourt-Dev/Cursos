import "styled-components/macro";
import React from "react";
import { GlobalStyles } from "./styles/global.styles";
import List from "./components/List";

const App = () => {
  return (
    <div style={{padding : '2rem'}}>
      <GlobalStyles/>
      <List/>
    </div>
  );
};

export default App;
