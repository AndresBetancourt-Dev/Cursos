import React from "react";
import { DefaultButton, HipsterButton, StyledButton } from "./components/Buttons";
import Title from "./components/Title";
import { Button } from "@mui/material";

const Colors = {
  purple: "#645cff",
};

const App = () => {
  return (
    <div
      style={{ padding: "2rem", backgroundColor: "#222222", color: "white" }}
    >
      {/**
       * Flaws, inline-styles need to be repeated in every component
       * class styles are static and if we need a variant we may need to create another class
       */}
      <Title color="green">styled-components</Title>
      {/**
       * Unique className using styled components;
       */}
      <DefaultButton color={Colors.purple}>click me</DefaultButton>{" "}
      <HipsterButton>click me</HipsterButton>
      <StyledButton variant="text">Text</StyledButton>
      <StyledButton variant="contained">Contained</StyledButton>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default App;
