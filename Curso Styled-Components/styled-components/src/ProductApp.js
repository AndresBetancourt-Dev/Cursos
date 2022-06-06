import "styled-components/macro";
import React from "react";
import { GlobalStyles } from "./styles/global.styles";
import Products from "./components/Products";

const App = () => {
  return (
    <div style={{padding : '2rem'}}>
      <GlobalStyles/>
      <Products/>
    </div>
  );
};

export default App;
