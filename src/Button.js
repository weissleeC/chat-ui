import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  width: ${({ width }) => width || "80px" };

  button{
    width:100%;
  }
`

function Button({ width, lable }) {
  return (
    <StyledButton width={width}>
      <button>{lable}</button>
    </StyledButton>
  );
}

export default Button;
