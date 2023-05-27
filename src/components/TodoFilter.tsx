import { Button } from "@blueprintjs/core";
import { useAtom } from "jotai";

import { filterAtom } from "../atoms";

const TodoFilter = () => {
  const [filter, setFilter] = useAtom(filterAtom);

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
};

export default TodoFilter;
