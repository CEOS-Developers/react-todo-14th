import React from "react";
import styled from "styled-components";

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 9rem;
  overflow-y: scroll;
`;
const TodoListItem = styled.div``;

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
