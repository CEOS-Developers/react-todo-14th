import React from "react";
import styled from "styled-components";
import DoneListItem from "./DoneListItem";

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 9rem;
  overflow-y: scroll;
`;

const DoneList = ({ todos, onRemove }) => {
  const doneCount = todos.filter((todo) => todo.checked === true);
  return (
    <div>
      <h2>DONE ({doneCount.length})</h2>
      <ListBox>
        {doneCount.map((todo) => (
          <DoneListItem todo={todo} key={todo.id} onRemove={onRemove} />
        ))}
      </ListBox>
    </div>
  );
};

export default DoneList;
