import React from "react";
import styled from "styled-components";

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 9rem;
  overflow-y: scroll;
`;
const DoneListItem = styled.div``;

const DoneList = () => {
  return (
    <div>
      <h2>DONE (0)</h2>
      <ListBox>
        <DoneListItem />
        <DoneListItem />
        <DoneListItem />
      </ListBox>
    </div>
  );
};

export default DoneList;
