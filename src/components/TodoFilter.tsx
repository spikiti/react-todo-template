import { Button } from "@blueprintjs/core";
import { useSnapshot } from "valtio";

import { actions, state } from "../store";

const TodoFilter = () => {
  const { filter } = useSnapshot(state);

  return (
    <ul className="flex gap-1">
      <li>
        <Button
          outlined
          active={filter === "ALL"}
          text="All"
          onClick={() => actions.setFilter("ALL")}
        />
      </li>
      <li>
        <Button
          outlined
          active={filter === "PENDING"}
          text="Pending"
          onClick={() => actions.setFilter("PENDING")}
        />
      </li>
      <li>
        <Button
          outlined
          active={filter === "COMPLETED"}
          text="Completed"
          onClick={() => actions.setFilter("COMPLETED")}
        />
      </li>
    </ul>
  );
};

export default TodoFilter;
