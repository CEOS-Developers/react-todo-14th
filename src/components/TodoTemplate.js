/*투두 리스트의 레이아웃(흰색 박스)*/
import React from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
const TodoTemplateBlock = styled.div`
  width: 350px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;
`;
function TodoTemplate({ children }) {
  return (
    <TodoTemplateBlock>
      <TodoList></TodoList>
      <TodoList></TodoList>
      <TodoInput></TodoInput>
    </TodoTemplateBlock>
  );
}
export default TodoTemplate;
