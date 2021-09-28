import React from "react";
import TodoList from "../lists/components.lists.todolist";
import DoneList from "../lists/component.lists.donelist";

function Mainpage() {
  return (
    <div>
      <TodoList />
      <DoneList />
    </div>
  );
}

export default Mainpage;
