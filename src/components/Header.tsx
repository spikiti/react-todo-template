import { Button } from "@blueprintjs/core";

import TodoInput from "./TodoInput";
import { AppContext } from "../machine";

const Header = () => {
  const actor = AppContext.useActorRef();

  const toggleAll = () => {
    actor.send({ type: "TOGGLE_ALL_TODOS" });
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
