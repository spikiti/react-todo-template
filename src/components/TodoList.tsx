import TodoItem from "./TodoItem";
import { useStore } from "../store";

const TodoList = () => {
  const todos = useStore((state) => state.todos);
  const filter = useStore((state) => state.filter);

  const displayedTodos = todos.filter((t) =>
    filter === "ALL"
      ? true
      : filter === "COMPLETED"
      ? t.status === "completed"
      : t.status === "pending"
  );

  return (
    <main>
      <ul>
        {displayedTodos.map((item) => {
          return <TodoItem key={item.id} todo={item} />;
        })}
      </ul>
    </main>
  );
};

export default TodoList;
