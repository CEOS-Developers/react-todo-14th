import React, { useState, useRef } from 'react';

const AddItemContainer = ({ itemList, addItem }) => {
  const [text, setText] = useState([]);
  const formRef = useRef();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      addItem(inputRef.current.value);
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
