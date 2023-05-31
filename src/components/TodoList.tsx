import TodoItem from "./TodoItem";
import { AppContext } from "../machine";

const TodoList = () => {
  const todos = AppContext.useSelector((s) => s.context.todos);
  const filter = AppContext.useSelector((s) => s.context.filter);

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
