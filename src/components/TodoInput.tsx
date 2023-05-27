import { InputGroup } from "@blueprintjs/core";
import { useSignal } from "@preact/signals-react";

import { addTodo } from "../store";

const TodoInput = () => {
  const text = useSignal("");

  return (
    <InputGroup
      className="flex-1"
      placeholder="Add a Task"
      value={text.value}
      onChange={(event) => {
        text.value = event.target.value;
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" && text.value.trim() !== "") {
          addTodo(text.value);
          text.value = "";
        }
      }}
    />
  );
};

export default TodoInput;
