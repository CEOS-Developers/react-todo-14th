import React from 'react';
import ItemList from './itemlist';
import ItemListTitle from './itemlisttitle';

const DoneItemContainer = ({ itemList, updateItemList }) => {
  const doneCount = itemList.filter((item) => item.state === 'done').length;
  return (
    <>
      <ItemListTitle title="😆완료된 할 일" count={doneCount}></ItemListTitle>
      <ItemList
        itemList={itemList}
        type="done"
        updateItemList={updateItemList}
      ></ItemList>
    </>
  );
};

export default React.memo(DoneItemContainer);
