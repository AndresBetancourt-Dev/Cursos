import React from 'react'
import styled from 'styled-components';
import { Colors } from '../utils';
import { DefaultButton } from "../components/Buttons";

const Container = styled.div`
  padding: 2rem;
  transition: all 0.3s;
  color : ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`


const DarkMode = ({toggleTheme}) => {
  return (
    <Container>
    <h1>Andrés David Betancourt Santana</h1>
    <DefaultButton onClick={toggleTheme} color={Colors.dark}>Toggle Theme</DefaultButton>
  </Container>
  )
}

export default DarkMode