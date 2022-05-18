import React from "react";
import styled from 'styled-components';
import { setupBorder } from "../utils";

const ComplexTitle = ({title, className}) => {
  return <div className={className}>
      <h1 className="title">{title}</h1>
      <div className="content"></div>
      <div className="box">

      </div>
  </div>;
};

/**
 * Scoped Styled
 */
const Wrapper = styled(ComplexTitle)`
    .title{
        text-transform: capitalize;
        text-align: center;
    }

    .content{
        box-shadow : 2px 2px 8px rgba(0,0,0,0.25);
        width: 100%;
        height : 20vh;
    }

    .box{
        height: 20px;
        border: ${setupBorder({color : 'red', width : 5})};
    }
`

export default Wrapper;
