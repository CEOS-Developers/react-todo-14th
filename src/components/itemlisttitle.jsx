import React from 'react';

const ItemListTitle = ({ title, count }) => {
  return (
    <h2>
      {title}({count})
    </h2>
  );
};

export default ItemListTitle;
