import { useRecoilValue } from "recoil";

import { countState } from "../store";

const TodoCount = () => {
  const count = useRecoilValue(countState);

  return (
    <div>
      <strong>{count}</strong> {count > 1 ? "items" : "item"} left
    </div>
  );
};

export default TodoCount;
