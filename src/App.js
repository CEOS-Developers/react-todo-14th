import React,{useState,useEffect} from 'react';
import './App.css';

import Container from './components/container';
import ItemListContainer from './components/ItemListContainer';
import TodoFormContainer from './components/TodoFormContainer'

import uuidv4 from './utils/random';

function App() {

  const [todoList,setTodoList] = useState([]);

  useEffect(() => {
    loadDataFromLocalStorage()
  },[]);

  useEffect(()=>{
    const data = todoList;
    saveToLocalStorage(data);
  },[todoList])

  // todoList의 isDone state를 변경
  const handleList = (data) => {
    const found = todoList.findIndex(element=>element.id===data.id);
    let myarr = [...todoList];
    myarr[found]=data;
    setTodoList(myarr);
  }
  
  // todoList 삭제
  const handleDelete = (id) => {
    const newList = todoList.filter(element=>element.id!==id);
    setTodoList(newList);
  }

  // form에서 입력받은대로 submit결과를 핸들링
  const handleSubmit = (input) => {
    if(input !== undefined && input !== ''){
      const newTodoList = {
        id:uuidv4(),
        text:input,
        isDone:false
      }
      setTodoList(prevList => [...prevList,newTodoList]);
    }
  }

  function saveToLocalStorage(data){
    localStorage.setItem('key',JSON.stringify(data));
  }

  function loadDataFromLocalStorage(){
    const data = localStorage.getItem('key');
    if(data !==null){
      const parsedData = JSON.parse(data);
      let arr = [];
      parsedData.forEach(input=>{
        arr = [...arr,input];
      })
      setTodoList(arr);
    }
  }
  return (
    <Container>
      <ItemListContainer onDeleteBtnPressed={handleDelete} onToggle={handleList} name="대기중" todoList={todoList.filter(element=>element.isDone===false)}/>
      <ItemListContainer onDeleteBtnPressed={handleDelete} onToggle={handleList} name="완료됨" todoList={todoList.filter(element=>element.isDone===true)}/>
      <TodoFormContainer onSubmit={handleSubmit}/>
    </Container>
  );
}


export default App;
