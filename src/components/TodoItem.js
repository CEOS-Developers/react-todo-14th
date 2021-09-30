import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import bin from '../img/bin.png';
import choonsik from '../img/choonsik.png';
import editImg from '../img/edit.png';
function TodoItem({ todoList, todoItem, setTodoList }) {
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState('');
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
  const onClickEditTodo = () => {
    setEdit(!edit);
  };
  const onHandleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const onHandleEditTodo = () => {
    todoList = todoList.map((item) => ({
      ...item,
      content: item.id === todoItem.id ? newTodo : item.content,
    }));
    if (newTodo) {
      setTodoList(todoList);
    }
  };
  return (
    <TodoItemWrapper>
      <TodoImg src={choonsik}></TodoImg>
      {edit ? (
        <>
          <Input value={newTodo} onChange={onHandleInputChange} />
        </>
      ) : (
        <Todo onClick={toggleTodo} isDone={todoItem.isDone}>
          {todoItem.content}
        </Todo>
      )}
      <div>
        <EditButton onClick={onClickEditTodo}>
          {edit ? (
            <EditButton onClick={onHandleEditTodo}>확인</EditButton>
          ) : (
            <EditImg src={editImg} />
          )}
        </EditButton>
        <DeleteButton onClick={deleteTodo}>
          <DeleteImg src={bin}></DeleteImg>
        </DeleteButton>
      </div>
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
const EditButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
const TodoImg = styled.img`
  width: 40px;
  height: 40px;
`;
const EditImg = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const DeleteImg = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const Input = styled.input`
  border-style: none;
  &:focus {
    outline: none;
  }
  border-bottom: 1px solid lightgray;
  margin-right: 10px;
  text-align: center;
`;
export default TodoItem;
