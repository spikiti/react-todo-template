import { Button } from "@blueprintjs/core";

import { AppContext } from "../machine";
import { Filter } from "../types";

const TodoFilter = () => {
  const actor = AppContext.useActorRef();
  const filter = AppContext.useSelector((s) => s.context.filter);

  const handleClick = (newFilter: Filter) => {
    actor.send({ type: "CHANGE_FILTER", payload: { filter: newFilter } });
  };

  return (
    <ul className="flex gap-1">
      <li>
        <Button
          outlined
          active={filter === "ALL"}
          text="All"
          onClick={() => handleClick("ALL")}
        />
      </li>
      <li>
        <Button
          outlined
          active={filter === "PENDING"}
          text="Pending"
          onClick={() => handleClick("PENDING")}
        />
      </li>
      <li>
        <Button
          outlined
          active={filter === "COMPLETED"}
          text="Completed"
          onClick={() => handleClick("COMPLETED")}
        />
      </li>
    </ul>
  );
};

export default TodoFilter;
