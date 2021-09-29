import React from 'react';
import styled from 'styled-components';

const AddTodoForm = () => {


    return (
        <StyledFooter>
            <StyledForm class="add-todo-form">
                <StyledInputContainer>
                    <StyledInput type="text" placeholder="새로운 할 일 추가" />
                </StyledInputContainer>
                <StyledBtn type="submit" >
                    추가
                </StyledBtn>
            </StyledForm>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  height: 10%;
  /* width: 100%; */

  margin: 0;
  padding: 0.6rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
`

const StyledForm = styled.form`
  height: 90%;
  width: 100%;

  display: flex;
  justify-content: space-around;
`

const StyledInputContainer = styled.div`
  width: 80%;

  padding: 0.2rem;
  margin-right: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  display: flex;
  align-items: center;
`

const StyledInput = styled.input`
  all: unset;
  
  margin: 0;
  padding-left: 0.4rem;
`

const StyledBtn = styled.button`
  all: unset;

  font-weight: bold;
  font-size: 0.8rem;
`

export default AddTodoForm;