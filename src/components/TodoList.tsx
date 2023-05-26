import TodoItem from "./TodoItem";
import type { Todo } from "../types";

const todos: Todo[] = [
  {
    id: "1",
    text: "Get groceries",
    status: "completed",
  },
  {
    id: "2",
    text: "Go to post office",
    status: "pending",
  },
  {
    id: "3",
    text: "Do the laundry",
    status: "pending",
  },
];

const TodoList = () => {
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
