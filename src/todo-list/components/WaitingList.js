import React, {useEffect} from 'react';
import styled from 'styled-components';
import useTodoList from '../hooks/useTodoList';
import TodoItem from './TodoItem';

function WaitingList() {

    const { waitingTodos } = useTodoList();

    useEffect(() => {
      console.log('==================================')
      console.log(' ')
      console.log(' ')
      console.log(' ')
        console.log('waitingTodos: ', waitingTodos);
        console.log(' ')
        console.log(' ')
        console.log(' ')
        console.log('==================================')
    }, [waitingTodos])

    const renderWaitingTodos = () => {
      return  (
        <StyledUl>
          {waitingTodos.map(todo => 
            <TodoItem todo={{id: todo.todoID, todoContent: todo.todoContent, waiting: todo.waiting}} />)}
        </StyledUl>
      )
      
    }

    return (
        <>
            <StyledTitleContainer>
                <StyledP>대기중</StyledP>
                <StyledP>{waitingTodos.length}</StyledP>
            </StyledTitleContainer>
            
            <StyledSection>
                {renderWaitingTodos()}
            </StyledSection>
        </>
    )
}

const StyledTitleContainer = styled.div`
  margin: 0;
  padding: 1rem;
`

const StyledP = styled.p`
  all: unset;
  padding: 0.3rem;

  font-weight: bold;
  font-size: 1rem;  
`

const StyledSection = styled.section`
  overflow: auto;

  height: 45%;
  /* width: 100%; */

  margin: 0;
  padding: 1rem;
`

const StyledUl = styled.ul`
  all: unset;

  overflow: auto;

  display: flex;
  flex-direction: column;
`


export default WaitingList;