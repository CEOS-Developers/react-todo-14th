import React from 'react';
import styled from 'styled-components';

function TodoItem ({id, todoContent, waiting}) {


    return (
        <StyledLi>
            {todoContent}
            <StyledBtn></StyledBtn>
        </StyledLi>
    )
}

const StyledLi = styled.li`
  margin: 0;
  padding: 0.7rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledBtn = styled.button`
  height: 1.1rem;
  width: 1.1rem;
    
  background: center url(img/bin.png);
  background-size: cover;

  visibility: hidden;
`

export default TodoItem