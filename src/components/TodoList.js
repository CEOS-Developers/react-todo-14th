import React, { useState } from "react";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 9rem;
  overflow-y: scroll;
`;

const TodoList = ({ todos, onRemove }) => {
  const todoCount = todos.filter((todo) => todo.checked === false);
  return (
    <div>
      <h2>TO DO ({todoCount.length})</h2>
      <ListBox>
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
        ))}
      </ListBox>
    </div>
  );
};

export default TodoList;
