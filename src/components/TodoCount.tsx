import { useContext } from "react";

import { TodosContext } from "../context";

const TodoCount = () => {
  const todos = useContext(TodosContext);

  const count = todos.filter((t) => t.status === "pending").length;

  return (
    <div>
      <strong>{count}</strong> {count > 1 ? "items" : "item"} left
    </div>
  );
};

export default TodoCount;
