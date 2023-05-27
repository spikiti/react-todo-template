import { Button } from "@blueprintjs/core";

import TodoInput from "./TodoInput";
import { useStore } from "../store";

const Header = () => {
  const toggleAll = useStore((state) => state.toggleAllTodos);

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
