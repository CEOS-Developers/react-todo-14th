import React from 'react';
import styled from 'styled-components';

const FinishedList = () => {


    return (
        <>
            <StyledTitleContainer>
                <StyledP>완료</StyledP>
                <StyledP></StyledP>
            </StyledTitleContainer>
            
            <StyledSection>
                <StyledUl>

                </StyledUl>
            </StyledSection>
        </>
    )
}

const StyledTitleContainer = styled.div`
  margin: 0;
  padding: 1rem;
`

const StyledP = styled.p`
  all: unset;

  font-weight: bold;
  font-size: 1rem;
`

const StyledSection = styled.section`
  overflow: auto;

  height: 45%;
  /* width: 100%; */

  margin: 0;
  padding: 1rem;
`

const StyledUl = styled.ul`
  all: unset;

  overflow: auto;

  display: flex;
  flex-direction: column;
`

export default FinishedList;