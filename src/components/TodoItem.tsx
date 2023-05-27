import { Checkbox, Button } from "@blueprintjs/core";

import type { Todo } from "../types";
import { actions } from "../store";

type Props = {
  todo: Todo;
};

// Using React.memo with object props may result in unexpected behavior
// See https://valtio.pmnd.rs/docs/how-tos/some-gotchas
const TodoItem = (props: Props) => {
  const { todo } = props;

  const isCompleted = todo.status === "completed";

  return (
    <li className="todo-item flex justify-between align-center ">
      <div className="flex align-center">
        <Checkbox
          checked={isCompleted}
          onClick={() => actions.toggleTodo(todo.id, todo.status)}
        />
        <label
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {todo.text}
        </label>
      </div>
      <div>
        <Button
          small
          icon="small-cross"
          onClick={() => actions.removeTodo(todo.id)}
        />
      </div>
    </li>
  );
};

export default TodoItem;
