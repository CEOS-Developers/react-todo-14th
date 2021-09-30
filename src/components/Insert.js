import React from "react";
import styled from "styled-components";
import { AiTwotoneBulb } from "react-icons/ai";

const InsertBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  border-radius: 5px;
  outline: none;
  border: none;
  height: 2rem;
  width: 18rem;
`;
const Button = styled.button`
  display: flex;
  background: none;
  border: none;
  outline: none;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const Insert = () => {
  return (
    <InsertBox>
      <Input placeholder="할 일을 입력하세요" />
      <Button type="submit">
        <AiTwotoneBulb />
      </Button>
    </InsertBox>
  );
};

export default Insert;
