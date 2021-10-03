import React from 'react';
import {
  ListHeader,
  ListContainer,
  DeleteBtn,
  List,
} from './ItemListPresenter';

const TodoList = ({ onToggle, onDeleteBtnPressed, name, todoList }) => {
  const handleToggle = (element) => {
    const tempData = {
      ...element,
      isDone: !element.isDone,
    };
    onToggle(tempData);
  };

  const handleDelete = (element) => {
    onDeleteBtnPressed(element.id);
  };

  function renderItems(item) {
    return item.map((element, index) => {
      return (
        <List key={index}>
          <span onClick={() => handleToggle(element)}>{element.text}</span>
          <DeleteBtn
            className="delete-button"
            onClick={() => handleDelete(element)}
          >
            <img src="/img/bin.png" width="20px" alt="bin"></img>
          </DeleteBtn>
        </List>
      );
    });
  }

  return (
    <>
      <ListHeader>
        {name}({todoList.length})
      </ListHeader>
      <ListContainer>{renderItems(todoList)}</ListContainer>
    </>
  );
};

export default TodoList;
