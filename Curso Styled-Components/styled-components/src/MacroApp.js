import "styled-components/macro";
import React from "react";
import { HipsterButton } from "./components/Buttons";
import Loading from "./components/Loading";
import { GlobalStyles } from "./styles/global.styles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Loading />
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton css={`color : purple;`} as="a" href="https://google.com" target="_blank">
        Click me
      </HipsterButton>
      <HipsterButton>Click me</HipsterButton>

      <div
        css={`
          color: green;
        `}
      >
        <h2>hello world</h2>
      </div>
    </>
  );
};

export default App;
