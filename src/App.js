import './App.css';
import React, { useState } from "react";
import {MdClear, MdAddCircle, MdCheckCircle} from 'react-icons/md'
import{v4 as UuidV4} from "uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  return <div className='Background'>
  <div className='do-list'>아직 완료 안된 일 ({todos.length})</div>
  <div className='box-list'>
  <UnDoneList  todos={todos} setTodos = {setTodos}/>
  </div>
  <div className='do-list'>완료된 일 ({dones.length}) </div>
  <div className='box-list'>
  <DoneList  dones={dones} setDones = {setDones}/>
  </div>
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
      <input type = 'text' placeholder='내용 입력하기...' className='task-input' value={input} required onChange={onInputChange}  />
      <button className='button-add' type='submit'>{<MdAddCircle />}</button>
    </form>
  )
}

const UnDoneList = ({todos, setTodos, dones, setDones}) => {
  const handleDelete = ({id})=>{
    setTodos(todos.filter((todo)=> todo.id !==id));
  }
  const handleComplete = ({id})=>{
    setTodos(todos.filter((todo)=> todo.id !==id));
    setDones(dones.filter((done)=> done.id ===id));
  }
 return (
   <div>
     {todos.map((todo) => (
       <li className="todo-list" key={todo.id} completed={todo.completed}>
         { todo.completed ===false ?
           <div>
           <input type='text' value={todo.title} className='list' onChange={(event)=>event.preventDefault()} />
             <button className="delete-button">
             <div className='list-button' onClick={() => handleDelete(todo)}>
               {<MdClear />}
               </div>
             </button>
             <button className="check-button">
             <div className='list-button' onClick={()=> handleComplete(todo)}>
               {<MdCheckCircle />}
               </div>
             </button>
           </div> :null
     }
       </li>
     ))}
   </div>
 )
}

const DoneList = ({dones, setDones}) => {
  const handleDelete = ({id})=>{
    setDones(dones.filter((todo)=> todo.id !==id));
  } 
 return (
   <div>
     {dones.map((todo) => (
       
       <li className="todo-list" key={todo.id} completed={todo.completed}>
         { todo.completed ===false ?
         <div>
         <input type='text' value={todo.title} className='list' onChange={(event)=>event.preventDefault()} />
           <button className="delete-button">
           <div className='list-button' onClick={() => handleDelete(todo)}>
             {<MdClear />}
             </div>
           </button>
           <button className="check-button">
           <div className='list-button' onClick={()=> handleDelete(todo)}>
             {<MdCheckCircle />}
             </div>
           </button>
         </div>:null}
       </li>
     ))}
   </div>
 )
}






export default App;
