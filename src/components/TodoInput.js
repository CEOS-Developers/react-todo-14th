import React, { useState } from 'react';
import styled from 'styled-components';
function TodoInput({ todoList, setTodoList }) {
  const [todo, setTodo] = useState('');
  const onHandleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const onAddButtonClick = () => {
    const newTodo = {
      id: Date.now(),
      content: todo,
      isDone: false,
    };
    todoList = todoList.concat(newTodo);
    setTodoList(todoList);
    setTodo('');
  };
  return (
    <TodoInputBox>
      <Input
        placeholder="새로운 할 일 추가"
        onChange={onHandleInputChange}
        value={todo}
      />
      <TodoButton onClick={onAddButtonClick}>+</TodoButton>
    </TodoInputBox>
  );
}
const TodoInputBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
`;
const Input = styled.input`
  border: 1px solid lightgray;
  width: 85%;
  border-radius: 20px;
  margin-right: 10px;
  text-align: center;
`;
const TodoButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #ffe990;
  border-radius: 50%;
  text-align: center;
  color: white;
  border: none;
  cursor: pointer;
`;
export default TodoInput;
