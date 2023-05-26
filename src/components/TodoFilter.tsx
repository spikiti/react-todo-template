import { Button } from "@blueprintjs/core";
import { memo } from "react";

import { Filter } from "../types";

type Props = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

const TodoFilter = memo((props: Props) => {
  const { filter, setFilter } = props;

  return (
    <ul className="flex gap-1">
      <li>
        <Button
          outlined
          active={filter === "ALL"}
          text="All"
          onClick={() => setFilter("ALL")}
        />
      </li>
      <li>
        <Button
          outlined
          active={filter === "PENDING"}
          text="Pending"
          onClick={() => setFilter("PENDING")}
        />
      </li>
      <li>
        <Button
          outlined
          active={filter === "COMPLETED"}
          text="Completed"
          onClick={() => setFilter("COMPLETED")}
        />
      </li>
    </ul>
  );
});

export default TodoFilter;
