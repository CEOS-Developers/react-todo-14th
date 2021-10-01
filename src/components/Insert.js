import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

const InsertBox = styled.form`
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
  &:hover {
    background: #a2a4dd;
  }
`;

const Insert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <InsertBox onSubmit={onSubmit}>
      <Input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <Button type="submit">
        <AiOutlinePlusCircle />
      </Button>
    </InsertBox>
  );
};

export default Insert;
