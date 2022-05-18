import React from "react";
import styled, { css } from "styled-components/macro";

/* const Button = styled.button.attrs({
  type: "button",
})`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.25rem 1rem;
  cursor: pointer;
  font-weight: bold;
`; */

const Button = styled.button.attrs((props) => {
  return {
    type: props.type || "button",
  };
})`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.25rem 1rem;
  cursor: pointer;
  font-weight: bold;
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    );
  }}
`;

const Input = styled.input.attrs((props) => {
    return {
      type: props.type || "text",
      placeholder : props.placeholder || 'Please enter text'
    };
  })`
    box-sizing: border-box;
    padding : 0.5rem;
    border : 2px solid #f2f4f8;
    border-radius: 0.25rem;
    width: 100%;
    margin-top: 1rem;
`;
const Form = () => {
  return (
    <div>
      <h2>some random stuff</h2>
      <Button>click me</Button>
      <form
        css={`
          width: 300px;
          background: white;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>Form</h2>
        <Input />
        <Input />
        <Input type="email" placeholder="Enter your e-mail" />
        <Button type="submit">submit here</Button>
      </form>
    </div>
  );
};

export default Form;
