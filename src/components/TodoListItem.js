import React from "react";
import styled from "styled-components";
import { AiOutlineMinusCircle } from "react-icons/ai";

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Text = styled.div``;
const Remove = styled.button`
  margin-right: 1.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: gray;
  &:hover {
    color: black;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text } = todo;
  return (
    <ListItem>
      <Text onClick={() => onToggle(id)}>{text}</Text>
      <Remove onClick={() => onRemove(id)}>
        <AiOutlineMinusCircle />
      </Remove>
    </ListItem>
  );
};

export default TodoListItem;
