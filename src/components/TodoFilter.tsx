import { Button } from "@blueprintjs/core";
import { useRecoilState } from "recoil";

import { filterState } from "../store";

const TodoFilter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

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
