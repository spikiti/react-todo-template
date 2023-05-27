import { useSnapshot } from "valtio";

import { state } from "../store";

const TodoCount = () => {
  const todos = useSnapshot(state.todos);

  const count = todos.filter((t) => t.status === "pending").length;

  return (
    <div>
      <strong>{count}</strong> {count > 1 ? "items" : "item"} left
    </div>
  );
};

export default TodoCount;
