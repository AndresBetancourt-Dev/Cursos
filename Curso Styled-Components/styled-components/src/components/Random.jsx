import React from "react";
import styled from "styled-components";
import { Colors } from "../utils";

const Random = () => {
  return (
    <Wrapper>
      <div className="content"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content {
    box-shadow: 2px 2px 8px #ff00003f;
    width: 100%;
    height: 20vh;
    background-color: ${Colors.dark};
  }
`;

export default Random;
