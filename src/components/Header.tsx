import { Button } from "@blueprintjs/core";
import { memo } from "react";

import TodoInput from "./TodoInput";

type Props = {
  addTodo: (text: string) => void;
  toggleAllTodos: () => void;
};

const Header = memo((props: Props) => {
  const { addTodo, toggleAllTodos } = props;

  return (
    <header>
      <h1>Todos</h1>
      <div className="flex gap-1">
        <Button icon="tick" onClick={toggleAllTodos} />
        <TodoInput addTodo={addTodo} />
      </div>
    </header>
  );
});

export default Header;
