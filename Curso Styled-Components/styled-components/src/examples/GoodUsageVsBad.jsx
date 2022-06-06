const Wrapper = ({ message }) => {
    // WARNING: THIS IS VERY VERY BAD AND SLOW, DO NOT DO THIS!!!
    const StyledWrapper = styled.div`
      /* ... */
    `;
  
    return <StyledWrapper>{message}</StyledWrapper>;
  };

  const StyledWrapperGood = styled.div`
  /* ... */
`;

const WrapperGood = ({ message }) => {
  return <StyledWrapperGood>{message}</StyledWrapperGood>;
};