import TodoCount from "./TodoCount";
import TodoFilter from "./TodoFilter";

const Footer = () => {
  return (
    <footer className="flex justify-between align-center">
      <TodoCount />
      <TodoFilter />
    </footer>
  );
};

export default Footer;
