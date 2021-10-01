import React from 'react';
import ItemList from './itemlist';
import ItemListTitle from './itemlisttitle';

const TodoItemContainer = ({ itemList, updateItemList }) => {
  return (
    <>
      <ItemListTitle title="✍해야 할 일"></ItemListTitle>
      <ItemList
        itemList={itemList}
        type="todo"
        updateItemList={updateItemList}
      ></ItemList>
    </>
  );
};

export default TodoItemContainer;
