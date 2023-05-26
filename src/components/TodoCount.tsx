type Props = {
  count: number;
};

const TodoCount = (props: Props) => {
  const { count } = props;

  return (
    <div>
      <strong>{count}</strong> {count > 1 ? "items" : "item"} left
    </div>
  );
};

export default TodoCount;
