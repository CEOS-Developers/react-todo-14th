/*투두 리스트의 레이아웃(흰색 박스)*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
function TodoTemplate() {
  //새로고침 해도 저장이 되게끔 localStorage에 저장
  const [todoList, setTodoList] = useState(() =>
    JSON.parse(window.localStorage.getItem('todo'))
  );
  useEffect(() => {
    todoList === null
      ? setTodoList([])
      : window.localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoTemplateBlock>
      <TodoList
        title={'대기중'}
        todoList={todoList}
        setTodoList={setTodoList}
        isDone={false}
      ></TodoList>
      <TodoList
        title={'완료됨'}
        todoList={todoList}
        setTodoList={setTodoList}
        isDone={true}
      ></TodoList>
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
