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
    { id: 3, text: "일정3", checked: true },
  ]);

  const nextId = useRef(4);

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

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <Wrapper>
      <Template>
        <Insert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <DoneList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </Template>
    </Wrapper>
  );
}

export default App;
