import TodoItem from "./TodoItem";
import { useAtomValue } from "jotai";

import { displayedAtoms } from "../atoms";

const TodoList = () => {
  const todos = useAtomValue(displayedAtoms);

  return (
    <main>
      <ul>
        {todos.map((item) => {
          return <TodoItem key={item.id} todo={item} />;
        })}
      </ul>
    </main>
  );
};

export default TodoList;
