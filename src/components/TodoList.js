import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
function TodoList() {
  return (
    <Wrapper>
      <Title>제목</Title>
      <TodoItem></TodoItem>
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
