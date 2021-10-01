import MakeList from './MakeList';

const ItemList = ({ items, deleteTodo, toggleTodo }) => {
  const todoList = items.filter((todoObj) => todoObj.isDone === false);
  const doneList = items.filter((todoObj) => todoObj.isDone === true);

  return (
    <>
      <MakeList
        items={todoList}
        title={`🌴 TODO (${todoList.length})`}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <MakeList
        items={doneList}
        title={`💐 DONE (${doneList.length})`}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
};

export default ItemList;
