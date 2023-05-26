import { Checkbox, Button } from "@blueprintjs/core";

import type { Todo } from "../types";

type Props = {
  todo: Todo;
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem = (props: Props) => {
  const { todo, completeTodo, deleteTodo } = props;

  const isCompleted = todo.status === "completed";

  return (
    <li className="todo-item flex justify-between align-center ">
      <div className="flex align-center">
        <Checkbox checked={isCompleted} onClick={() => completeTodo(todo.id)} />
        <label
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {todo.text}
        </label>
      </div>
      <div>
        <Button small icon="small-cross" onClick={() => deleteTodo(todo.id)} />
      </div>
    </li>
  );
};

export default TodoItem;
