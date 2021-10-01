import React from 'react';
import Item from './item';

const ItemList = ({ itemList, type, updateItemList }) => {
  return (
    <ul>
      {itemList &&
        itemList.map(
          (element) =>
            element.state === type && (
              <Item
                id={element.id}
                content={element.content}
                state={type}
                updateItemList={updateItemList}
                itemList={itemList}
              ></Item>
            )
        )}
    </ul>
  );
};

export default ItemList;
