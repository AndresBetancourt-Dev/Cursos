import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import { GlobalStyles } from "./styles/global.styles";

const BaseTheme = {
  color : '#222',
  background : '#fff'
}

const DarkTheme = {
  background : '#222',
  color : '#fff'
}


const App = () => {

  const [theme,setTheme] = React.useState(true);

  const toggleTheme = () => setTheme(!theme);

  return (
    <ThemeProvider theme={theme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Card name={"sofá"} price={300} />
      <Card name={"sofá"} price={300} />
      <Card name={"sofá"} price={300} />
    </ThemeProvider>
  );
};

export default App;
