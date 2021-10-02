import React, { useState } from "react";
import "./components.lists.todolist.css";

function Todo({ todo, index, finishTodo, deleteTodo }) {
  return (
    <li>
      <div>{todo.text}</div>
      <div>
        <button onClick={() => finishTodo(index)}>complete</button>
        <button onClick={() => deleteTodo(index)}>delete</button>
      </div>
    </li>
  );
}

export function TodoList() {
  const [listOfTodo, setTodo] = useState([
    {
      text: "Hello",
      complete: false,
    },
    {
      text: "HelloHI",
      complete: false,
    },
    {
      text: "HIHello",
      complete: false,
    },
  ]);

  const addTodo = (text) => {
    const tempTodo = [...listOfTodo, { text }];
    setTodo(tempTodo);
  };

  const finishTodo = (index) => {
    const tempTodo = [...listOfTodo];
    tempTodo[index].complete = true;
    setTodo(tempTodo);
  };

  const deleteTodo = (index) => {
    const tempTodo = [...listOfTodo];
    tempTodo.splice(index, 1);
    setTodo(tempTodo);
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
    </div>
  );
}

export function DoneList() {
  const [listOfDone, setDone] = useState([
    {
      text: "Hello1",
      complete: false,
    },
    {
      text: "HelloHI2",
      complete: false,
    },
    {
      text: "HIHello3",
      complete: false,
    },
  ]);

  const addDone = (text) => {
    const tempDone = [...listOfDone, { text }];
    setDone(tempDone);
  };

  const finishDone = (index) => {
    const tempDone = [...listOfDone];
    tempDone[index].complete = true;
    setDone(tempDone);
  };

  const deleteDone = (index) => {
    const tempDone = [...listOfDone];
    tempDone.splice(index, 1);
    setDone(tempDone);
  };

  return (
    <div>
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
    </div>
  );
}
