import styled from "styled-components/macro";
import {css} from "styled-components"
import { Button } from "@mui/material";

export const DefaultButton = styled.button`
   background-color: ${props => props.color};;
   color : ${({special}) => (special && 'pink') || 'white'} ;
   border: none;
   border-radius: 0.25rem;
   cursor: pointer;
   width: 200px;
   margin : 1rem auto;
   padding: 0.25rem;
   display: block;
   text-transform: capitalize;
   font-weight: bold;
   ${({large})=> large ? css`
      padding : 1rem;
      font-size: 1.5rem;
      font-weight: 700;
   ` : css`
      padding : 0.5rem;
      font-size: 1rem;
      font-weight: 400;
   `}
`;

export const HipsterButton = styled(DefaultButton)`
    width: 100%;
    color : brown;
    background-image: linear-gradient(45deg, pink, beige);
    padding: 1em;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
`;

export const StyledButton = styled(Button)`
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`