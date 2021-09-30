import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  width: 350px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  border-radius: var(--size-border-radius);
  background-color: var(--color-white);
`;
const AppContainer = (props) => {
  return (
    <StyledContainer>
      <></>
    </StyledContainer>
  );
};

export default AppContainer;
