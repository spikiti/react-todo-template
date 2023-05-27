import { useAtomValue } from "jotai";

import { countAtom } from "../atoms";

const TodoCount = () => {
  const count = useAtomValue(countAtom);

  return (
    <div>
      <strong>{count}</strong> {count > 1 ? "items" : "item"} left
    </div>
  );
};

export default TodoCount;
