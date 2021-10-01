import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
function TodoList({ title, isDone, todoList, setTodoList }) {
  const count =
    todoList != null
      ? todoList.filter((todo) => todo.isDone === isDone).length
      : 0;
  return (
    <Wrapper>
      <Title>
        {title} ({count})
      </Title>
      {todoList &&
        todoList.map((todoItem) =>
          //대기중과 완료된 일을 구분
          todoItem.isDone === isDone ? (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ) : (
            ''
          )
        )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow: auto;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export default TodoList;
