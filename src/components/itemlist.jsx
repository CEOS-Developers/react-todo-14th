import React from 'react';
import Item from './item';

const ItemList = ({ itemList }) => {
  return (
    <ul>
      <Item content="test1"></Item>
      <Item content="test2"></Item>
      <Item content="test3"></Item>
      {itemList && itemList.map((element) => <Item content={element}></Item>)}
    </ul>
  );
};

export default ItemList;
