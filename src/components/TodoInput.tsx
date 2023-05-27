import { InputGroup } from "@blueprintjs/core";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { nanoid } from "nanoid";

import { todosState } from "../store";

const TodoInput = () => {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todosState);

  const addItem = () => {
    setTodos((todos) => [
      ...todos,
      {
        id: nanoid(),
        text,
        status: "pending",
      },
    ]);

    setText("");
  };

  return (
    <InputGroup
      className="flex-1"
      placeholder="Add a Task"
      value={text}
      onChange={(event) => setText(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" && text.trim() !== "") {
          addItem();
        }
      }}
    />
  );
};

export default TodoInput;
