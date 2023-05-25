import { useContext } from "react";

import TodoItem from "./TodoItem";
import { FilterContext, TodosContext } from "../context";

const TodoList = () => {
  const todos = useContext(TodosContext);
  const filter = useContext(FilterContext);

  return (
    <main>
      <ul>
        {todos
          .filter((t) =>
            filter === "ALL"
              ? true
              : filter === "COMPLETED"
              ? t.status === "completed"
              : t.status === "pending"
          )
          .map((item) => {
            return <TodoItem key={item.id} todo={item} />;
          })}
      </ul>
    </main>
  );
};

export default TodoList;
