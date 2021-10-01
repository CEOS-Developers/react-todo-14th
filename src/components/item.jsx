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
  const deleteItem = () => {
    const newItemList = itemList.filter((element) => element.id !== id);
    updateItemList([...newItemList]);
  };

  return (
    <StyledLi>
      <StyledButtonContainer onClick={() => {}}>
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
