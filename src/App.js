import React from 'react';
import styled from 'styled-components';
import WaitingList from './todo-list/components/WaitingList';
import FinishedList from './todo-list/components/FinishedList';
import AddTodoForm from './todo-list/components/AddTodoForm';

function App() {
  return (
    <StyledBackground>
      <StyledRootContainer>
        <WaitingList />
        <FinishedList />
        <AddTodoForm />
      </StyledRootContainer>
    </StyledBackground>
  );
}

const StyledRootContainer = styled.div`
  height: 600px;
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: space-between;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;
`

const StyledBackground = styled.div`
  margin: 0;
  
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #2ec1ac;
`

export default App;
