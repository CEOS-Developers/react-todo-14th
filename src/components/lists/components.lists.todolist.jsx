import React, { useState } from "react";
import "./components.lists.todolist.css";
import Form from "../form/components.form.form";
import logo from "./bin.png";

//basic function for each todo item in the list
function Todo({ todo, index, finishTodo, deleteTodo }) {
  return (
    <li>
      {/* if clicked, move the item to the other list */}
      <span onClick={() => finishTodo(index, todo.text)}>{todo.text}</span>
      {/* if clicked, delete the item */}
      <div className="button">
        <img
          src={logo}
          alt="img"
          onClick={() => deleteTodo(index, todo.text)}
          align="right"
        />
      </div>
    </li>
  );
}

//function of whole todolist
export function TodoList() {
  //use of react hook to create todolist and finishedlist
  const [listOfTodo, setTodo] = useState([]);
  const [listOfDone, setDone] = useState([]);
  //if called, add the item to the todolist
  const addTodo = (text) => {
    const tempTodo = [...listOfTodo, { text }];
    setTodo(tempTodo);
  };
  //if called, move the item to the finishedlist
  const finishTodo = (index, text) => {
    addDone(text);
    deleteTodo(index);
  };
  //if called, delete the item from the todolist
  const deleteTodo = (index) => {
    const tempTodo = [...listOfTodo];
    tempTodo.splice(index, 1);
    setTodo(tempTodo);
  };
  //if called, add the item to the finishedlist
  const addDone = (text) => {
    const tempDone = [...listOfDone, { text }];
    setDone(tempDone);
  };
  //if called, move the item to the todolist
  const finishDone = (index, text) => {
    addTodo(text);
    deleteDone(index);
  };
  //if called, delete the item from the finished list
  const deleteDone = (index) => {
    const tempDone = [...listOfDone];
    tempDone.splice(index, 1);
    setDone(tempDone);
  };

  return (
    <div>
      <div className="todoTitle">해야할 것들</div>
      <div className="todoList">
        <ul className="todos" type="square">
          {listOfTodo.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              finishTodo={finishTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
      <div className="doneTitle">다했다~</div>
      <div className="doneList">
        <ul className="dones" type="square">
          {listOfDone.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              finishTodo={finishDone}
              deleteTodo={deleteDone}
            />
          ))}
        </ul>
      </div>
      <Form addTodo={addTodo} />
    </div>
  );
}
