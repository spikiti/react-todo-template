import { Button } from "@blueprintjs/core";
import { useSetAtom } from "jotai";

import TodoInput from "./TodoInput";
import { todosAtom } from "../atoms";

const Header = () => {
  const setTodos = useSetAtom(todosAtom);

  const toggleAll = () => {
    setTodos((todos) => {
      const hasPending = todos.some((t) => t.status === "pending");

      return todos.map((t) => ({
        ...t,
        status: hasPending ? "completed" : "pending",
      }));
    });
  };

  return (
    <header>
      <h1>Todos</h1>
      <div className="flex gap-1">
        <Button icon="tick" onClick={toggleAll} />
        <TodoInput />
      </div>
    </header>
  );
};

export default Header;
