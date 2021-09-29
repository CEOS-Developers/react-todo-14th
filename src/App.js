import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2ec1ac;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate></TodoTemplate>
    </>
  );
}

export default App;
