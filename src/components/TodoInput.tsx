import { InputGroup } from "@blueprintjs/core";
import { ChangeEvent, KeyboardEvent, useState } from "react";

type Props = {
  addTodo: (text: string) => void;
};

const TodoInput = (props: Props) => {
  const { addTodo } = props;

  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

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
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoInput;
