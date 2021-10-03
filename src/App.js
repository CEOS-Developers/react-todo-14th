import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Bareun_hipi', sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFE990;
  }
  @font-face {
    font-family: 'Bareun_hipi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Bareun_hipi.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate />
    </>
  );
}

export default App;
