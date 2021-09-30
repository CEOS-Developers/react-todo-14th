import React, { Fragment } from 'react';
import {
    ListHeader,
    ListContainer
}from './ItemListPresenter';

const TodoList = (props) => {
    const {name,todoList} = props;

    const handleToggle = (element) => {
        const tempData = {
            ...element,
            isDone: !element.isDone
        }
        props.onToggle(tempData);
    }

    function renderItems(item){
        return item.map((element,index)=>{
            return(
                <Fragment key={index}>
                    <li onClick={()=>handleToggle(element)}>{element.text}</li>

                </Fragment>
            )
        })
    }

    return(
        <> 
            <ListHeader>{name}({todoList.length})</ListHeader>
            <ListContainer>
            {renderItems(todoList)}
            </ListContainer>
        </>
    )
}

export default TodoList;