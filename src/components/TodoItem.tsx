import { Checkbox, Button } from "@blueprintjs/core";

import type { Todo } from "../types";
import { toggleTodo, removeTodo } from "../store";
import { memo } from "react";

type Props = {
  todo: Todo;
};

const TodoItem = memo((props: Props) => {
  const { todo } = props;

  const isCompleted = todo.status === "completed";

  return (
    <li className="todo-item flex justify-between align-center ">
      <div className="flex align-center">
        <Checkbox
          checked={isCompleted}
          onClick={() => toggleTodo(todo.id, todo.status)}
        />
        <label
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {todo.text}
        </label>
      </div>
      <div>
        <Button small icon="small-cross" onClick={() => removeTodo(todo.id)} />
      </div>
    </li>
  );
});

export default TodoItem;
