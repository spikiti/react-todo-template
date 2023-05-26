import { Button } from "@blueprintjs/core";

import TodoInput from "./TodoInput";

type Props = {
  addTodo: (text: string) => void;
  completeAllTodos: () => void;
};

const Header = (props: Props) => {
  const { addTodo, completeAllTodos } = props;

  return (
    <header>
      <h1>Todos</h1>
      <div className="flex gap-1">
        <Button icon="tick" onClick={completeAllTodos} />
        <TodoInput addTodo={addTodo} />
      </div>
    </header>
  );
};

export default Header;
