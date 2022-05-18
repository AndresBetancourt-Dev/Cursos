import styled from "styled-components";
/**
 * Tagged Template Literal
 */
const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: ${(props) => props.color};
`;

export default Title;
