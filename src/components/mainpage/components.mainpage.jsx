import React from "react";
import TodoList from "../lists/components.lists.todolist";
import DoneList from "../lists/components.lists.donelist";
import "./components.mainpage.css";

function Mainpage() {
  return (
    <div className="container">
      <h1>오늘 해야할 일이 뭐가 있을까 ?</h1>
      <TodoList />
      <DoneList />
      <form className="inputForm">
        <input
          name="inputText"
          className="inputText"
          type="text"
          placeholder="할게 뭐가 있지?"
          autoFocus
          onSubmit
        />
      </form>
    </div>
  );
}

export default Mainpage;
