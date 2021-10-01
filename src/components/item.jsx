import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  display: none;
  color: black;
  :hover {
    color: red;
  }
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 var(--size-item-padding);
  :hover ${StyledDeleteButton} {
    display: initial;
  }
`;
const StyledButtonContainer = styled.button`
  width: 100%;
`;

const StyledDoneItem = styled.span`
  text-decoration: 5px solid line-through;
  color: var(--color-light-black);
`;

const Item = ({ content, state, updateItemList, itemList, id }) => {
  const toggleState = (previousState) => {
    const nextState = previousState === 'todo' ? 'done' : 'todo';
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
  if (state == 'todo') {
    return (
      <StyledLi>
        <StyledButtonContainer
          onClick={() => {
            toggleState(state);
          }}
        >
          <span>{content}</span>
        </StyledButtonContainer>
        <StyledDeleteButton
          onClick={() => {
            deleteItem();
          }}
        >
          <i className="fas fa-trash"></i>
        </StyledDeleteButton>
      </StyledLi>
    );
  } else {
    return (
      <StyledLi>
        <StyledButtonContainer
          onClick={() => {
            toggleState(state);
          }}
        >
          <StyledDoneItem>{content}</StyledDoneItem>
        </StyledButtonContainer>
        <StyledDeleteButton
          onClick={() => {
            deleteItem();
          }}
        >
          <i className="fas fa-trash"></i>
        </StyledDeleteButton>
      </StyledLi>
    );
  }
};

export default Item;
