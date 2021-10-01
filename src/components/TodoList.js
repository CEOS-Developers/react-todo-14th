import React from "react";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 9rem;
  overflow-y: scroll;
`;

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>TO DO (0)</h2>
      <ListBox>
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </ListBox>
    </div>
  );
};

export default TodoList;
