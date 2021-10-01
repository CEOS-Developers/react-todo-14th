import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import Template from "./components/Template";
import Insert from "./components/Insert";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f3bdca;
`;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "일정1", checked: false },
    { id: 2, text: "일정2", checked: false },
  ]);

  const nextId = useRef(3);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <Wrapper>
      <Template>
        <Insert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} />
        <DoneList />
      </Template>
    </Wrapper>
  );
}

export default App;
