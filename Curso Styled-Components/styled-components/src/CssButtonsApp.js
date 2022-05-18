import "styled-components/macro";
import React from "react";
import { DefaultButton } from "./components/Buttons";
import { Colors } from "./utils";

const App = () => {
  return (
    <div padding={{padding : '2rem'}}>
      <DefaultButton color={Colors.primary}>Click Me</DefaultButton>
      <DefaultButton large color={Colors.primary}>Click Me</DefaultButton>
    </div>
  );
};

export default App;
