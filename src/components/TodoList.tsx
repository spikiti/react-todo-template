import { useSnapshot } from "valtio";

import TodoItem from "./TodoItem";
import { state } from "../store";

const TodoList = () => {
  const { todos, filter } = useSnapshot(state);

  let displayedTodos = [...todos];

  if (filter === "COMPLETED") {
    displayedTodos = todos.filter((t) => t.status === "completed");
  }

  if (filter === "PENDING") {
    displayedTodos = todos.filter((t) => t.status === "pending");
  }

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
