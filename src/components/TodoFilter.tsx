import { Button } from "@blueprintjs/core";

import { filter, updateFilter } from "../store";

const TodoFilter = () => {
  return (
    <ul className="flex gap-1">
      <li>
        <Button
          outlined
          active={filter.value === "ALL"}
          text="All"
          onClick={() => updateFilter("ALL")}
        />
      </li>
      <li>
        <Button
          outlined
          active={filter.value === "PENDING"}
          text="Pending"
          onClick={() => updateFilter("PENDING")}
        />
      </li>
      <li>
        <Button
          outlined
          active={filter.value === "COMPLETED"}
          text="Completed"
          onClick={() => updateFilter("COMPLETED")}
        />
      </li>
    </ul>
  );
};

export default TodoFilter;
