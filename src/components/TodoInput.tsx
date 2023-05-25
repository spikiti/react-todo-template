import { nanoid } from "nanoid";
import { InputGroup } from "@blueprintjs/core";
import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";

import { TodosDispatchContext } from "../context";

const TodoInput = () => {
  const [text, setText] = useState("");

  const setTodos = useContext(TodosDispatchContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && text.trim() !== "") {
      setTodos((todos) => [
        ...todos,
        { id: nanoid(), text, status: "pending" },
      ]);

      setText("");
    }
  };

  return (
    <InputGroup
      className="flex-1"
      placeholder="Add a Task"
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoInput;
