import { count } from "../store";

const CountHint = () => {
  return <span>{count.value > 1 ? "items" : "item"} left</span>;
};

const TodoCount = () => {
  return (
    <div>
      {/* count is bypassing vdom diffing */}
      <strong>{count}</strong> <CountHint />
    </div>
  );
};

export default TodoCount;
