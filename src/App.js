import './App.css';
import React, { useState } from "react";
import {MdClear, MdAddCircle, MdCheckCircle} from 'react-icons/md'
import{v4 as UuidV4} from "uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return <div className='Background'>
  <div className='do-list'>아직 완료 안된 일 ()</div>
  <UnDoneList  todos={todos} setTodos = {setTodos}/>
  <div className='do-list'>완료된 일 (0) </div>
  <Form 
  input = {input}
  setInput = {setInput}
  todos = {todos}
  setTodos = {setTodos}
  />
  </div>
}

const Form = ({input, setInput, todos, setTodos}) => {
  const onInputChange = (event) =>{
    setInput(event.target.value);
  }
  const onFormSubmit = (event) =>{
    event.preventDefault();
    setTodos([...todos, {id:UuidV4(), title:input, completed:false}]);
    setInput("");
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input type = 'text' placeholder='enter a todo...' className='task-input' value={input} required onChange={onInputChange}  />
      <button className='button-add' type='submit'>{<MdAddCircle />}</button>
    </form>
  )
}
const UnDoneList = ({todos, setTodos}) => {
 return (
   <div>
     {todos.map((todo) => (
       <li className="todo-list" key={todo.id}>
         <input type='text' value={todo.title} className='list' onChange={(event)=>event.preventDefault()} />
         <div>
           <button className="delete-button">
           <div className={'content'}>
             {<MdClear />}
             </div>
           </button>
           <button className="check-button">
           <div className={'content'}>
             {<MdCheckCircle />}
             </div>
           </button>
         </div>
       </li>
     ))}
   </div>
 )
}




export default App;
