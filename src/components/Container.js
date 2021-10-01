import styled from 'styled-components';
import List from './List';

const Container = ({
  todo,
  handleChange,
  addNewTodo,
  items,
  setItems,
  deleteTodo,
  toggleTodo,
}) => {
  const todoList = items.filter((todoObj) => todoObj.isDone === false);
  const doneList = items.filter((todoObj) => todoObj.isDone === true);

  return (
    <TodoContainer>
      <Title>💌 투두리스트</Title>
      <InputFormWrapper>
        <Input
          value={todo}
          onChange={handleChange}
          placeholder="할 일을 입력하세요."
        />
        <AddTodoBtn onClick={addNewTodo}>➕</AddTodoBtn>
      </InputFormWrapper>
      <List
        title={`📃 TODO (${todoList.length})`}
        items={todoList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <List
        title={`💐 DONE (${doneList.length})`}
        items={doneList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  width: 360px;
  height: 600px;

  display: flex;
  flex-direction: column;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const Title = styled.header`
  height: 7.5%;

  font-size: 1.3rem;

  display: flex;
  align-items: center;
  padding: 1rem 1rem 0 1rem;

  margin: 0;
`;

const InputFormWrapper = styled.form`
  height: 12.5%;

  display: flex;
  align-items: center;

  justify-content: space-around;

  border-bottom: solid 1px lightgrey;
`;

const Input = styled.input`
  height: 50%;
  width: 70%;

  padding-left: 0.75rem;

  border-radius: 15px;
  border: solid 1px lightgrey;

  &:focus {
    outline: none;
  }
`;

const AddTodoBtn = styled.button`
  height: 2rem;
  width: 2rem;

  margin: 0;
  padding: 0;

  border: none;
  border-radius: 10px;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

export default Container;
