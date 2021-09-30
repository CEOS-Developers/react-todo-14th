import React from 'react';
import AppContainer from './components/appcontainer';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
/* Global */
:root {
  /* Color */
  --color-dark-orange: #ac5300;
  --color-white: #ffffff;
  --color-pink: #fdc7ff;
  --color-waiting: #fff5bf;
  --color-done: #fff1a0;
  --color-add: #fff5bf;

  /* Font size */
  --font-medium: 18px;
  --font-small: 16px;

  /* Size */
  --size-border-radius: 15px;
}

/* Universal tags */
* {
  box-sizing: border-box;
  font-family: 'ELAND_Choice_M';
}

/* default settings */

html,
body {
  margin: 0;
}

input,
button,
ul,
p {
  all: unset;
}

ul {
  list-style: none;
}

body {
  width: 100vw;
  height: 100vh;

  /* Center Container */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Coloring */
  background-color: var(--color-dark-orange);
}

/* Typography */
@font-face {
  font-family: 'ELAND_Choice_M';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/ELAND_Choice_M.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}
h2 {
  font-size: var(--font-medium);
}

`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer />
    </>
  );
};

export default App;
