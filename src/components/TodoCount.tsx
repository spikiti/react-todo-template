import { AppContext } from "../machine";

const TodoCount = () => {
  const todos = AppContext.useSelector((s) => s.context.todos);

  const count = todos.filter((t) => t.status === "pending").length;

  return (
    <div>
      <strong>{count}</strong> {count > 1 ? "items" : "item"} left
    </div>
  );
};

export default TodoCount;
