import React from 'react';
import styled from 'styled-components';
import bin from '../img/bin.png';
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
      <Todo onClick={toggleTodo}>{todoItem.content}</Todo>
      <DeleteButton onClick={deleteTodo}>
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
