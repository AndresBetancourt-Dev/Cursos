import React from "react";
import styled from "styled-components";
import { IMAGE_URL } from "../constants";
import { Colors } from "../utils";

const Card = ({ name, price }) => {
  return (
    <StyledCard>
      <img src={IMAGE_URL} alt="product" />
      <footer>
        <h4>{name}</h4>
        <p>${price}</p>
      </footer>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background-color: var(--white);
  border-radius: 0.25rem;
  transition: all 0.5s ease-in-out;

  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    h4 {
      text-transform: capitalize;
      &:hover{
          color : var(--primary);
      }
      &::before{
          content: 'Name : ';
          color: var(--primary);
      }
    }
    p {
      color: ${Colors.dark};
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }

  &:hover{
      box-shadow: 2px 2px 8px ${Colors.dark};
      cursor: pointer;
  }
`;

export default Card;
