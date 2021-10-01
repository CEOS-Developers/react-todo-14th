import React, { useState, useRef } from 'react';

const AddItemContainer = ({ itemList, addItem }) => {
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

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="text">+</button>
    </form>
  );
};

export default AddItemContainer;
