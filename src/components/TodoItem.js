import React from 'react';
import styled, { css } from 'styled-components';
import bin from '../img/bin.png';
import choonsik from '../img/choonsik.png';
function TodoItem({ todoList, todoItem, setTodoList }) {
  const deleteTodo = () => {
    todoList = todoList.filter((todo) => todo.id !== todoItem.id);
    setTodoList(todoList);
  };
  const toggleTodo = () => {
    todoList = todoList.map((todo) => ({
      ...todo,
      isDone: todo.id === todoItem.id ? !todo.isDone : todo.isDone, //선택한 todo의 완료 여부를 반전
    }));
    setTodoList(todoList);
  };
  return (
    <TodoItemWrapper>
      <Todo onClick={toggleTodo} isDone={todoItem.isDone}>
        <TodoImg src={choonsik}></TodoImg>
        {todoItem.content}
      </Todo>
      <DeleteButton onClick={deleteTodo}>
        <DeleteImg src={bin}></DeleteImg>
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
const Todo = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.isDone &&
    css`
      text-decoration: line-through;
      color: lightgray;
    `}
`;
const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  background-size: fit;
  cursor: pointer;
`;
const TodoImg = styled.img`
  width: 40px;
  height: 40px;
`;
const DeleteImg = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
export default TodoItem;
