import React from "react";
import TodoList from "../lists/components.lists.todolist";
import DoneList from "../lists/component.lists.donelist";
import "./components.mainpage.css";

function Mainpage() {
  return (
    <div className="container">
      <TodoList />
      <DoneList />
    </div>
  );
}

export default Mainpage;
