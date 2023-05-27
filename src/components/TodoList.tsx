import { memo } from "react";

import TodoItem from "./TodoItem";
import type { Todo } from "../types";

type Props = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = memo((props: Props) => {
  const { todos, toggleTodo, deleteTodo } = props;

  return (
    <main>
      <ul>
        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              todo={item}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </main>
  );
});

export default TodoList;
