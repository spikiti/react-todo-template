import { useRecoilValue } from "recoil";

import TodoItem from "./TodoItem";
import { displayedTodosState } from "../store";

const TodoList = () => {
  const todos = useRecoilValue(displayedTodosState);

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
