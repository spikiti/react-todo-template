import { InputGroup } from "@blueprintjs/core";
import { useState, KeyboardEvent } from "react";

import { AppContext } from "../machine";

const TodoInput = () => {
  const [text, setText] = useState("");

  const actor = AppContext.useActorRef();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && text.trim() !== "") {
      actor.send({ type: "ADD_TODO", payload: { text } });
      setText("");
    }
  };

  return (
    <InputGroup
      className="flex-1"
      placeholder="Add a Task"
      value={text}
      onChange={(event) => setText(event.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoInput;
