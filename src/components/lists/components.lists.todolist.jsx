import React, { useState } from "react";
import "./components.lists.todolist.css";
import Form from "../form/components.form.form";

function Todo({ todo, index, finishTodo, deleteTodo }) {
  return (
    <li>
      <div>{todo.text}</div>
      <div>
        <button onClick={() => finishTodo(index, todo.text)}>complete</button>
        <button onClick={() => deleteTodo(index, todo.text)}>delete</button>
      </div>
    </li>
  );
}

export function TodoList() {
  const [listOfTodo, setTodo] = useState([
    {
      text: "Hello",
    },
    {
      text: "HelloHI",
    },
    {
      text: "HIHello",
    },
  ]);

  const [listOfDone, setDone] = useState([
    {
      text: "Hello1",
    },
    {
      text: "HelloHI2",
    },
    {
      text: "HIHello3",
    },
  ]);

  const addTodo = (text) => {
    const tempTodo = [...listOfTodo, { text }];
    setTodo(tempTodo);
  };

  const finishTodo = (index, text) => {
    addDone(text);
    deleteTodo(index);
  };

  const deleteTodo = (index) => {
    const tempTodo = [...listOfTodo];
    tempTodo.splice(index, 1);
    setTodo(tempTodo);
  };

  const addDone = (text) => {
    const tempDone = [...listOfDone, { text }];
    setDone(tempDone);
  };

  const finishDone = (index, text) => {
    addTodo(text);
    deleteDone(index);
  };

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
