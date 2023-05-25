import { Checkbox, Button } from "@blueprintjs/core";

type Props = {
  text: string;
};

const TodoItem = (props: Props) => {
  const { text } = props;

  return (
    <li className="todo-item flex justify-between align-center ">
      <div className="flex align-center">
        <Checkbox />
        <label>{text}</label>
      </div>
      <div>
        <Button small icon="cross" />
      </div>
    </li>
  );
};

export default TodoItem;
