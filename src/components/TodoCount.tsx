import { memo } from "react";

type Props = {
  count: number;
};

const TodoCount = memo((props: Props) => {
  const { count } = props;

  return (
    <div>
      <strong>{count}</strong> {count > 1 ? "items" : "item"} left
    </div>
  );
});

export default TodoCount;
