import React from 'react';
import ItemList from './itemlist';
import ItemListTitle from './itemlisttitle';

const DoneItemContainer = (props) => {
  return (
    <>
      <ItemListTitle title="😆완료된 할 일"></ItemListTitle>
      <ItemList></ItemList>
    </>
  );
};

export default DoneItemContainer;
