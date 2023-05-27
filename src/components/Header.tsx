import { Button } from "@blueprintjs/core";
import { useContext } from "react";

import TodoInput from "./TodoInput";
import { TodosDispatchContext } from "../context";

const Header = () => {
  const setTodos = useContext(TodosDispatchContext);

  const handleToggleAll = () => {
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
        <Button icon="tick" onClick={handleToggleAll} />
        <TodoInput />
      </div>
    </header>
  );
};

export default Header;
