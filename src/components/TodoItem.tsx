import { Checkbox, Button } from "@blueprintjs/core";

import type { Todo } from "../types";

type Props = {
  todo: Todo;
};

const TodoItem = (props: Props) => {
  const { todo } = props;

  const isCompleted = todo.status === "completed";

  return (
    <li className="todo-item flex justify-between align-center ">
      <div className="flex align-center">
        <Checkbox />
        <label
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {todo.text}
        </label>
      </div>
      <div>
        <Button small icon="small-cross" />
      </div>
    </li>
  );
};

export default TodoItem;
