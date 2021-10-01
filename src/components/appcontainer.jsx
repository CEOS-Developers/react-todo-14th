import React, { useState } from 'react';
import styled from 'styled-components';
import AddItemContainer from './additemcontainer';
import DoneItemContainer from './doneitemcontainer';
import TodoItemContainer from './todoitemcontainer';

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

const StyledTodoItemContainer = styled.div`
  background-color: var(--color-waiting);
  height: 275px;
  position: relative;
  border-top-left-radius: var(--size-border-radius);
  border-top-right-radius: var(--size-border-radius);
`;

const StyledDoneItemContainer = styled.div`
  background-color: var(--color-done);
  height: 275px;
`;

const StyledAddItemContainer = styled.div`
  background-color: var(--color-add);
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-left-radius: var(--size-border-radius);
  border-bottom-right-radius: var(--size-border-radius);
`;

const AppContainer = (props) => {
  const [itemList, setItemList] = useState([]);
  const addItem = (item) => {
    setItemList([...itemList, item]);
  };

  const updateItemList = (newItemList) => {
    setItemList([...newItemList]);
  };

  return (
    <StyledContainer>
      <>
        <StyledTodoItemContainer>
          <TodoItemContainer
            itemList={itemList}
            updateItemList={updateItemList}
          />
        </StyledTodoItemContainer>
        <StyledDoneItemContainer>
          <DoneItemContainer
            itemList={itemList}
            updateItemList={updateItemList}
          />
        </StyledDoneItemContainer>
        <StyledAddItemContainer>
          <AddItemContainer
            itemList={itemList}
            addItem={addItem}
            updateItemList={updateItemList}
          />
        </StyledAddItemContainer>
      </>
    </StyledContainer>
  );
};

export default AppContainer;
