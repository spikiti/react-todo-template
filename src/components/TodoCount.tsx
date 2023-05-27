import { useStore } from "../store";

const TodoCount = () => {
  const todos = useStore((state) => state.todos);

  const count = todos.filter((t) => t.status === "pending").length;

  return (
    <div>
      <strong>{count}</strong> {count > 1 ? "items" : "item"} left
    </div>
  );
};

export default TodoCount;
