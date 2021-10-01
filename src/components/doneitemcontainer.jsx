import React from 'react';
import ItemList from './itemlist';
import ItemListTitle from './itemlisttitle';

const DoneItemContainer = ({ itemList, updateItemList }) => {
  return (
    <>
      <ItemListTitle title="😆완료된 할 일"></ItemListTitle>
      <ItemList
        itemList={itemList}
        type="done"
        updateItemList={updateItemList}
      ></ItemList>
    </>
  );
};

export default DoneItemContainer;
