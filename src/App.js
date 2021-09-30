import React,{useState} from 'react';
import './App.css';

import Container from './components/Container';
import ItemListContainer from './components/ItemListContainer';
import TodoFormContainer from './components/TodoFormContainer'

function App() {

  const [todoList,setTodoList] = useState([])

  const onSearchSubmit = (input) => {
    if(input !== undefined && input !== ''){
      const newTodoList = {
        id:todoList.length + 1,
        text:input,
        isDone:false
      }
      setTodoList(prevList => [...prevList,newTodoList]);
    }
  }

  return (
    <Container>
      <ItemListContainer name="대기중" todoList={todoList.filter(element=>element.isDone===false)}/>
      <ItemListContainer name="완료됨" todoList={todoList.filter(element=>element.isDone===true)}/>
      <TodoFormContainer onSubmit={onSearchSubmit}/>
    </Container>
  );
}


export default App;
