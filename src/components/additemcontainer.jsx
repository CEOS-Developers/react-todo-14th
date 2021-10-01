import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.span`
  display: flex;
  margin: 10px 0 10px 10px;

  background-color: white;
  border: solid 1px rgba(0, 0, 0, 0.25);
  border-radius: var(--size-border-radius);
  width: 250px;
`;

const StyledInput = styled.input`
  margin: 0;
  width: 240px;
  padding: 0 5px;
  position: relative;
  left: -15px;
`;
const StyledInnerForm = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  margin-left: 20px;
`;

const StyledAddButton = styled.button`
  background-color: var(--color-green);
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 2rem;
  border-radius: 50%;
  color: var(--color-white);
`;
const StyledResetButton = styled.button`
  background-color: var(--color-red);
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  color: var(--color-white);
  margin-left: 10px;
`;

const AddItemContainer = ({ addItem, updateItemList }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      addItem({
        id: Date.now(),
        content: `${inputRef.current.value}`,
        state: 'todo',
      });
      formRef.current.reset();
    }
  };

  const resetItemList = () => {
    updateItemList([]);
  };

  return (
    <StyledForm>
      <form ref={formRef} onSubmit={handleSubmit}>
        <StyledInnerForm>
          <StyledInput ref={inputRef} type="text" />
          <StyledAddButton type="submit">+</StyledAddButton>
          <StyledResetButton type="button" onClick={resetItemList}>
            <i className="fas fa-redo-alt"></i>
          </StyledResetButton>
        </StyledInnerForm>
      </form>
    </StyledForm>
  );
};

export default AddItemContainer;
