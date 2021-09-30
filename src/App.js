import './App.css';
import React, { useState } from "react";
import {MdClear, MdAddCircle} from 'react-icons/md'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '할 일 목록 1',
      done: false
    },
    {
      id:2,
      text: '할 일 목록 2',
      done: false
    },
    {
      id:3,
      text: '할 일 목록 3',
      done: false
    },
  ]
  )
  return <div className='Background'>
  <div className='do-list'>아직 완료 안된 일 (0)</div>
  <UnDoneList  todos={todos}/>
  <div className='do-list'>완료된 일 (0) </div>

  <AddList />
  </div>
}

const UnDoneList = ({todos}) => {
  return <div>{todos.map(todo => (<WrittenList todo={todo} key={todo.id}/>))}</div>
}

const DoneList  = ({todos}) => {
  //return <div>{todos.map(todo => (<WrittenList todo={todo} key={todo.id}/>))}</div>
}

const WrittenList = ({todo}) => {
  const {id,text,done} = todo;
  return (
    <div className="WrittenList">
      <div>{text}</div>
      <div className={'content'}>
        {<MdClear />}
      </div>
    </div>
  )
}

function AddList(){
  return (
      <form>
        <input
          type="text"
          name="text"
          placeholder="이곳에 할일을 입력하세요.."/>
        <button type="submit">
          {<MdAddCircle />}
        </button>
      </form>
  );
}
export default App;
