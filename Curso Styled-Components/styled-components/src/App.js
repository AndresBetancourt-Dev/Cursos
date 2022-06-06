import "styled-components/macro";
import styled, { css } from "styled-components/macro";
import React from "react";
import { GlobalStyles } from "./styles/global.styles";
import Counter from "./components/Counter.new";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor : pointer;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

// This could be react-router-dom's Link for example
const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <GlobalStyles />
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button>Normal</Button>
      <TomatoButton>Primary</TomatoButton>
      <Button as="a" href="#">Link with Button styles</Button>
    <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    <Counter/>
    </div>
  );
};

export default App;
