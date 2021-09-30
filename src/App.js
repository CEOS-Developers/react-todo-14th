import React from "react";
import styled from "styled-components";
import Template from "./components/Template";
import Insert from "./components/Insert";
import TodoList from "./components/TodoList";

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
  return (
    <Wrapper>
      <Template>
        <Insert />
        {/* <TodoList /> */}
      </Template>
    </Wrapper>
  );
}

export default App;
