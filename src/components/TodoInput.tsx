import { InputGroup } from "@blueprintjs/core";
import { useState, KeyboardEvent } from "react";

import { useStore } from "../store";

const TodoInput = () => {
  const [text, setText] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && text.trim() !== "") {
      addTodo(text);
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
