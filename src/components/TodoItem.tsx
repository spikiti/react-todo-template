import { Checkbox, Button } from "@blueprintjs/core";
import { useContext } from "react";

import type { Todo } from "../types";
import { TodosDispatchContext } from "../context";

type Props = {
  todo: Todo;
};

const TodoItem = (props: Props) => {
  const { todo } = props;

  const setTodos = useContext(TodosDispatchContext);

  const isCompleted = todo.status === "completed";

  const handleComplete = () => {
    setTodos((todos) =>
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, status: isCompleted ? "pending" : "completed" };
        }

        return t;
      })
    );
  };

  const handleDelete = () => {
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
  };

  return (
    <li className="todo-item flex justify-between align-center ">
      <div className="flex align-center">
        <Checkbox checked={isCompleted} onClick={handleComplete} />
        <label
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {todo.text}
        </label>
      </div>
      <div>
        <Button small icon="small-cross" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default TodoItem;
