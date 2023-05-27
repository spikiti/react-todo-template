import { Button } from "@blueprintjs/core";
import { useSetRecoilState } from "recoil";

import TodoInput from "./TodoInput";
import { todosState } from "../store";

const Header = () => {
  const setTodos = useSetRecoilState(todosState);

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
