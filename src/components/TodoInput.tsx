import { InputGroup } from "@blueprintjs/core";
import { useSetAtom } from "jotai";
import { KeyboardEvent, useState } from "react";
import { nanoid } from "nanoid";

import { addTodoAtom } from "../atoms";

const TodoInput = () => {
  const [text, setText] = useState("");
  const addTodo = useSetAtom(addTodoAtom);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && text.trim() !== "") {
      addTodo({ id: nanoid(), text, status: "pending" });

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
