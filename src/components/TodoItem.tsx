import { Checkbox, Button } from "@blueprintjs/core";
import { memo } from "react";
import { shallow } from "zustand/shallow";

import type { Todo } from "../types";
import { useStore } from "../store";

type Props = {
  todo: Todo;
};

const TodoItem = memo((props: Props) => {
  const { todo } = props;

  const [toggleTodo, removeTodo] = useStore(
    (state) => [state.toggleTodo, state.removeTodo],
    shallow
  );

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
