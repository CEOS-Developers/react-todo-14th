import React from 'react';

const ItemListTitle = ({ title }) => {
  let count = 0;
  return (
    <h2>
      {title}({count})
    </h2>
  );
};

export default ItemListTitle;
