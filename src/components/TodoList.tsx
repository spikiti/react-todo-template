import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <main>
      <ul>
        <TodoItem text="Taste JavaScript" />
        <TodoItem text="Buy a unicorn" />
        <TodoItem text="Read a book" />
      </ul>
    </main>
  );
};

export default TodoList;
