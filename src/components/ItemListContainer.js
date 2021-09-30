import React, { Fragment } from 'react';
import {
    ListHeader,
    ListContainer
}from './ItemListPresenter';

const TodoList = ({name,todoList}) => {

    function renderItems(item){
        return item.map((element,index)=>{
            return(
                <Fragment key={index}>
                    <li>{element.text}</li>
                </Fragment>
            )
        })
    }

    return(
        <> 
            <ListHeader>{name}</ListHeader>
            <ListContainer>
            {renderItems(todoList)}
            </ListContainer>
        </>
    )
}

export default TodoList;