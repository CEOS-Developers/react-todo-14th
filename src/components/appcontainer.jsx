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
const AppContainer = (props) => {
  const [itemList, setItemList] = useState([
    { id: Date.now(), content: 'test', state: 'todo' },
  ]);
  const addItem = (item) => {
    setItemList([...itemList, item]);
  };

  const updateItemList = (newItemList) => {
    setItemList([...newItemList]);
  };

  return (
    <StyledContainer>
      <>
        <TodoItemContainer
          itemList={itemList}
          updateItemList={updateItemList}
        />
        <DoneItemContainer />
        <AddItemContainer itemList={itemList} addItem={addItem} />
      </>
    </StyledContainer>
  );
};

export default AppContainer;
