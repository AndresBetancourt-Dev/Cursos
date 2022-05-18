import React from "react";
import styled, { css } from "styled-components";

const fruits = ["orange", "bananas", "apple", "bananas"];

const Item = styled.li`
  list-style-type: none;
  text-transform: capitalize;
  font-weight: 700;
  padding : 1rem;
  ${({ odd }) =>
    odd
      ? css`
          background: orange;
        `
      : css`
          background: paleturquoise;
        `}
`;

const List = () => {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <Item key={index} odd={(index + 1) % 2 !== 0}>
          {fruit}
        </Item>
      ))}
    </ul>
  );
};

export default List;
