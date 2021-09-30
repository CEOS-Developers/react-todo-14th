import React from 'react';
import {
    ListHeader,
    ListContainer
}from './ItemListPresenter';

const TodoList = props => {
    const {name} = props;
    return(
        <>
            <ListHeader>{name}</ListHeader>
            <ListContainer>
            </ListContainer>
        </>
    )
}

export default TodoList;