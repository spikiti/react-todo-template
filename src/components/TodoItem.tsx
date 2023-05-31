import { Checkbox, Button } from "@blueprintjs/core";
import { memo } from "react";

import type { Todo } from "../types";
import { AppContext } from "../machine";

type Props = {
  todo: Todo;
};

const TodoItem = memo((props: Props) => {
  const { todo } = props;

  const actor = AppContext.useActorRef();

  const handleToggle = () => {
    actor.send({
      type: "TOGGLE_TODO",
      payload: { id: todo.id, status: todo.status },
    });
  };

  const handleRemove = () => {
    actor.send({ type: "REMOVE_TODO", payload: { id: todo.id } });
  };

  const isCompleted = todo.status === "completed";

  return (
    <li className="todo-item flex justify-between align-center ">
      <div className="flex align-center">
        <Checkbox checked={isCompleted} onClick={handleToggle} />
        <label
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {todo.text}
        </label>
      </div>
      <div>
        <Button small icon="small-cross" onClick={handleRemove} />
      </div>
    </li>
  );
});

export default TodoItem;
