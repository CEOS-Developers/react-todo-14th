import React from "react";
//create function for input form
function Form({ addTodo }) {
  //initial state of input form value
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    //prevent reloading
    e.preventDefault();
    //no submission if empty
    if (!value) return;
    addTodo(value);
    //reset value
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
