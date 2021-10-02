import React from "react";

function Form({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="할게 뭐가 있지?"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default Form;
