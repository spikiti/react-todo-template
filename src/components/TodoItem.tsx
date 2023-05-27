import { Checkbox, Button } from "@blueprintjs/core";
import { useSetAtom } from "jotai";
import { memo } from "react";

import type { Todo } from "../types";
import { todosAtom } from "../atoms";

type Props = {
  todo: Todo;
};

const TodoItem = memo((props: Props) => {
  const { todo } = props;

  const setTodos = useSetAtom(todosAtom);

  const removeTodo = () => {
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
  };

  const toggleTodo = () => {
    setTodos((todos) =>
      todos.map((t) =>
        t.id !== todo.id
          ? t
          : {
              ...t,
              status: todo.status === "completed" ? "pending" : "completed",
            }
      )
    );
  };

  const isCompleted = todo.status === "completed";

  return (
    <li className="todo-item flex justify-between align-center ">
      <div className="flex align-center">
        <Checkbox checked={isCompleted} onClick={toggleTodo} />
        <label
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {todo.text}
        </label>
      </div>
      <div>
        <Button small icon="small-cross" onClick={removeTodo} />
      </div>
    </li>
  );
});

export default TodoItem;
