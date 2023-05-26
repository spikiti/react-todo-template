import TodoItem from "./TodoItem";
import type { Todo } from "../types";

type Props = {
  todos: Todo[];
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = (props: Props) => {
  const { todos, completeTodo, deleteTodo } = props;

  return (
    <main>
      <ul>
        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              todo={item}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default TodoList;
