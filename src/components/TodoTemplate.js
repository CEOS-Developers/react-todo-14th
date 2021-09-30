/*투두 리스트의 레이아웃(흰색 박스)*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
function TodoTemplate() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    console.log(todoList);
  });

  return (
    <TodoTemplateBlock>
      <TodoList
        title={'대기중'}
        todoList={todoList}
        setTodoList={setTodoList}
      ></TodoList>
      <TodoList title={'완료됨'}></TodoList>
      <TodoInput todoList={todoList} setTodoList={setTodoList}></TodoInput>
    </TodoTemplateBlock>
  );
}
const TodoTemplateBlock = styled.div`
  width: 350px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;
`;
export default TodoTemplate;
