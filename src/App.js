import './App.css';
import React, { useState } from "react";
import {MdClear} from 'react-icons/md'

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
    }
  ]
  )
  return <div>
    <div>대기 중 (0) </div>
  <div>아직 완료 안된 일</div>
  <UnDoneList  todos={todos}/>
  <div>완료된 일</div>

  </div>
}

const UnDoneList = ({todos}) => {
  return <div>{todos.map(todo => (<WriteList todo={todo} key={todo.id}/>))}</div>
}

const DoneList  = () => {

}

const WriteList = ({todo}) => {
  const {id,text,done} = todo;
  return (
    <div className="WriteList">
      <div>{text}</div>
      <div className={'content ${done}'}>
        {<MdClear />}
      </div>
    </div>
  )
}

const AddList = () => {

}
export default App;
