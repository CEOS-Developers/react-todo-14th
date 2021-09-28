import React, { useState } from "react";
import "./components.lists.todolist.css";

function TodoList() {
  const [listOfToDo, setTodo] = useState(["Hello", "Hi", "hfkldsaj"]);

  return (
    <div>
      <div className="todoTitle">해야할 것들</div>
      <div className="todoList">
        <ul className="todos" type="square">
          {listOfToDo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
