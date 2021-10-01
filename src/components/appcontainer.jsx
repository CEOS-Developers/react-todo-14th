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
  // itemList는 item = {id,content,state}로 이루어진 객체배열
  const [itemList, setItemList] = useState([]);

  // itemList에 새로운 item 추가
  const addItem = (item) => {
    setItemList([...itemList, item]);
  };
  // 변경사항이 생기면 새로운 itemList 객체로 대체.
  // appContainer->itemContainer->itemList->item에 props로 전달
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
