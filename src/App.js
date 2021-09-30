import React from 'react';
import './App.css';

import Container from './components/Container';
import ItemListContainer from './components/ItemListContainer';
import TodoFormContainer from './components/TodoFormContainer'

function App() {
  return (
    <Container>
      <ItemListContainer name="대기중"/>
      <ItemListContainer name="완료됨"/>
      <TodoFormContainer/>
    </Container>
  );
}


export default App;
