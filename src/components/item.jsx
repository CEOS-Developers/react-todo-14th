import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
`;
const StyledButtonContainer = styled.button`
  color: red;
  background-color: yellow;
  width: 100%;
`;
const Item = ({ content, state, updateItemList, itemList, id }) => {
  const toggleState = (previousState) => {
    const nextState = previousState === 'todo' ? 'done' : 'todo';
    console.log(previousState, nextState);
    const newItemList = itemList.filter((element) => element.id !== id);
    updateItemList([
      ...newItemList,
      { id: Date.now(), content, state: nextState },
    ]);
  };
  const deleteItem = () => {
    const newItemList = itemList.filter((element) => element.id !== id);
    updateItemList([...newItemList]);
  };

  return (
    <StyledLi>
      <StyledButtonContainer
        onClick={() => {
          toggleState(state);
        }}
      >
        <span>{content}</span>
      </StyledButtonContainer>
      <button
        onClick={() => {
          deleteItem();
        }}
      >
        <i className="fas fa-trash"></i>
      </button>
    </StyledLi>
  );
};

export default Item;
