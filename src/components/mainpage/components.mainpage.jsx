import React from "react";
import { TodoList } from "../lists/components.lists.todolist";
import "./components.mainpage.css";

function Mainpage() {
  return (
    <div className="container">
      <h1>오늘 해야할 일이 뭐가 있을까 ?</h1>
      <TodoList />
    </div>
  );
}

export default Mainpage;
