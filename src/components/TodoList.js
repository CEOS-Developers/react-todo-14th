import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
function TodoList({ title, todoList, setTodoList }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {todoList &&
        todoList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow: auto;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export default TodoList;
