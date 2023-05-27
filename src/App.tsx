import { useMemo, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Filter } from "./types";
import { useTodo } from "./useTodo";

const App = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, toggleAllTodos } = useTodo();

  const [filter, setFilter] = useState<Filter>("ALL");

  const pendingTodosCount = useMemo(
    () => todos.filter((t) => t.status === "pending").length,
    [todos]
  );

  const displayedTodos = useMemo(
    () =>
      todos.filter((t) =>
        filter === "ALL"
          ? true
          : filter === "COMPLETED"
          ? t.status === "completed"
          : t.status === "pending"
      ),
    [filter, todos]
  );

  return (
    <div className="flex flex-col gap-2">
      <Header addTodo={addTodo} toggleAllTodos={toggleAllTodos} />
      <TodoList
        todos={displayedTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <Footer count={pendingTodosCount} filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default App;
