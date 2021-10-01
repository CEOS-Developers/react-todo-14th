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
  const [itemList, setItemList] = useState(['a', 'b']);
  const addItem = (item) => {
    setItemList([...itemList, item]);
    console.log('현재 itemList:', itemList);
  };

  return (
    <StyledContainer>
      <>
        <TodoItemContainer itemList={itemList} />
        <DoneItemContainer />
        <AddItemContainer itemList={itemList} addItem={addItem} />
      </>
    </StyledContainer>
  );
};

export default AppContainer;
