import React from 'react';
import styled from 'styled-components';
function TodoInput() {
  return (
    <TodoInputBox>
      <Input placeholder="새로운 할 일 추가" />
      <TodoButton>+</TodoButton>
    </TodoInputBox>
  );
}
const TodoInputBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
`;
const Input = styled.input`
  border: 1px solid lightgray;
  width: 85%;
  border-radius: 20px;
  margin-right: 10px;
  text-align: center;
`;
const TodoButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #2ec1ac;
  border-radius: 50%;
  text-align: center;
  color: white;
  border: none;
`;
export default TodoInput;
