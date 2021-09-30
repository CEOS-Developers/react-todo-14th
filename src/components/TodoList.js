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

const TodoList = () => {
  return (
    <div>
      <h2>TO DO (0)</h2>
      <ListBox>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ListBox>
    </div>
  );
};

export default TodoList;
