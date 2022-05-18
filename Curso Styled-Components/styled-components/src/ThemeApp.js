import React from "react";
import { ThemeProvider } from "styled-components";
import DarkMode from "./components/DarkMode";
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
      <DarkMode toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
};

export default App;
