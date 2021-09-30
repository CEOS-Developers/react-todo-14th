import React, { Fragment } from 'react';
import {
    ListHeader,
    ListContainer,
    DeleteBtn,
    List
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

    const handleDelete = (element) => {
        props.onDeleteBtnPressed(element.id);
    }

    function renderItems(item){
        return item.map((element,index)=>{
            return(
                <List key={index}>
                    <li onClick={()=>handleToggle(element)}>{element.text}</li>
                    <DeleteBtn onClick={()=>handleDelete(element)}><img src="/img/bin.png" width="20px" alt="bin"></img></DeleteBtn>
                </List>
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