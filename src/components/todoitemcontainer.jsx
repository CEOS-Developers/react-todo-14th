import React from 'react';
import ItemList from './itemlist';
import ItemListTitle from './itemlisttitle';

const TodoItemContainer = ({ itemList }) => {
  return (
    <>
      <ItemListTitle title="✍해야 할 일"></ItemListTitle>
      <ItemList itemList={itemList}></ItemList>
    </>
  );
};

export default TodoItemContainer;
