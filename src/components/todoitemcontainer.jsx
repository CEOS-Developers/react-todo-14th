import React from 'react';
import ItemList from './itemlist';
import ItemListTitle from './itemlisttitle';

const TodoItemContainer = ({ itemList, updateItemList }) => {
  const todoCount = itemList.filter((item) => item.state === 'todo').length;

  return (
    <>
      <ItemListTitle title="✍해야 할 일" count={todoCount}></ItemListTitle>
      <ItemList
        itemList={itemList}
        type="todo"
        updateItemList={updateItemList}
      ></ItemList>
    </>
  );
};

export default TodoItemContainer;
