import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFE990;
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
