import TodoItem from "./TodoItem";

import { displayedTodos } from "../store";

const TodoList = () => {
  return (
    <main>
      <ul>
        {displayedTodos.value.map((item) => {
          return <TodoItem key={item.id} todo={item} />;
        })}
      </ul>
    </main>
  );
};

export default TodoList;
