import { Filter } from "../types";
import TodoCount from "./TodoCount";
import TodoFilter from "./TodoFilter";

type Props = {
  count: number;
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

const Footer = (props: Props) => {
  const { count, filter, setFilter } = props;

  return (
    <footer className="flex justify-between align-center">
      <TodoCount count={count} />
      <TodoFilter filter={filter} setFilter={setFilter} />
    </footer>
  );
};

export default Footer;
