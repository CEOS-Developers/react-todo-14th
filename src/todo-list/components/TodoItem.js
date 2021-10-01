import React, {useEffect} from 'react';
import styled from 'styled-components';
import useTodoList from '../hooks/useTodoList';

function TodoItem ({...props}) {

    const { deleteTodo, changeTodoStatus } = useTodoList();
    const id = props.todo.id;
    const todoContent = props.todo.todoContent;
    const waiting = props.todo.waiting;

    const onDeleteBtnClick = () => {
        deleteTodo({id: id, waiting: waiting});
    }

    const onClickTodoItem = (event) => {
        if (event.target.localName === 'button') {
            onDeleteBtnClick();
            return;
        }
        changeTodoStatus({id: id, todoContent: todoContent, waiting: waiting})
    }

    return (
        <StyledLi onClick={onClickTodoItem} key={id}>
            {todoContent}
            <StyledBtn onClick={onDeleteBtnClick}></StyledBtn>
        </StyledLi>
    )
}

const StyledLi = styled.li`
  margin: 0;
  padding: 0.7rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledBtn = styled.button`
  height: 1.1rem;
  width: 1.1rem;
    
  background: center url(../../../assets/img/bin.png);
  background-size: cover;

  /* visibility: hidden; */
`

export default TodoItem