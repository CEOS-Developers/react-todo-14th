import React from "react";
import { TodoList, DoneList } from "../lists/components.lists.todolist";
import Form from "../form/components.form.form";
import "./components.mainpage.css";

function Mainpage() {
  return (
    <div className="container">
      <h1>오늘 해야할 일이 뭐가 있을까 ?</h1>
      <TodoList />
      <DoneList />
      <Form />
    </div>
  );
}

export default Mainpage;
