import React,{useState} from 'react';
import './App.css';

import Container from './components/Container';
import ItemListContainer from './components/ItemListContainer';
import TodoFormContainer from './components/TodoFormContainer'

function App() {

  const [todoList,setTodoList] = useState([])

  // todoList의 isDone state를 변경
  const handleList = (data) => {
    const found = todoList.findIndex(element=>element.id===data.id);
    let myarr = [...todoList];
    myarr[found]=data;
    setTodoList(myarr);
  }

  // form에서 입력받은대로 submit결과를 핸들링
  const handleSubmit = (input) => {
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
      <ItemListContainer onToggle={handleList} name="대기중" todoList={todoList.filter(element=>element.isDone===false)}/>
      <ItemListContainer onToggle={handleList} name="완료됨" todoList={todoList.filter(element=>element.isDone===true)}/>
      <TodoFormContainer onSubmit={handleSubmit}/>
    </Container>
  );
}


export default App;
