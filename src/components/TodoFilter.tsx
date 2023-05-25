import { Button } from "@blueprintjs/core";

const TodoFilter = () => {
  return (
    <ul className="flex gap-1">
      <li>
        <Button outlined active text="All" />
      </li>
      <li>
        <Button outlined text="Pending" />
      </li>
      <li>
        <Button outlined text="Completed" />
      </li>
    </ul>
  );
};

export default TodoFilter;
