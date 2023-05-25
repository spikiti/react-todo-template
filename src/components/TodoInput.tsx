import { InputGroup } from "@blueprintjs/core";
import { useState } from "react";

const TodoInput = () => {
  const [text, setText] = useState("");

  return (
    <InputGroup
      className="flex-1"
      placeholder="Add a Task"
      value={text}
      onChange={(event) => setText(event.target.value)}
    />
  );
};

export default TodoInput;
