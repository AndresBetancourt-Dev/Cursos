import React from "react";
import styled from 'styled-components';
import { Colors, setupBorder } from "../utils";

const ComplexTitle = ({title}) => {
  return <Wrapper>
      <h1 className="title">{title}</h1>
  </Wrapper>;
};

/**
 * Scoped Styled
 */
const Wrapper = styled.div`
    .title{
        text-transform: capitalize;
        text-align: center;
        color : ${Colors.dark} ; /* Override global class */
    }

    .content{
        box-shadow : 2px 2px 8px rgba(0,0,0,0.25);
        width: 100%;
        height : 20vh;
        background-color: var(--primary);
    }

    .box{
        height: 20px;
        border: ${setupBorder({color : 'red', width : 5})};
    }
`

export default ComplexTitle;
