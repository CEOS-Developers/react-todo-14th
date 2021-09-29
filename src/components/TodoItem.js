import React from 'react';
import styled from 'styled-components';
import bin from '../img/bin.png';
function TodoItem() {
  return (
    <TodoItemWrapper>
      <Todo>todo 내용</Todo>
      <DeleteButton>
        <Img src={bin}></Img>
      </DeleteButton>
    </TodoItemWrapper>
  );
}
const TodoItemWrapper = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  cursor: pointer;
`;
const Todo = styled.div``;
const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  background-size: fit;
  cursor: pointer;
`;
const Img = styled.img`
  width: 20px;
  height: 20px;
`;
export default TodoItem;
