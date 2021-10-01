import React, { useRef } from 'react';

const AddItemContainer = ({ itemList, addItem, updateItemList }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      addItem({
        id: Date.now(),
        content: `${inputRef.current.value}`,
        state: 'todo',
      });
      formRef.current.reset();
    }
  };

  const resetItemList = () => {
    updateItemList([]);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">+</button>
      <button type="button" onClick={resetItemList}>
        <i classNmae="fas fa-sync-alt"></i>
      </button>
    </form>
  );
};

export default AddItemContainer;
