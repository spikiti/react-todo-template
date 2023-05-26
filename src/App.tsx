import { useState } from "react";
import { nanoid } from "nanoid";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Todo, Filter } from "./types";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("ALL");

  const displayedTodos = todos.filter((t) =>
    filter === "ALL"
      ? true
      : filter === "COMPLETED"
      ? t.status === "completed"
      : t.status === "pending"
  );

  const addTodo = (text: string) => {
    setTodos([...todos, { id: nanoid(), text, status: "pending" }]);
  };

  const completeTodo = (id: string) => {
    setTodos(
      todos.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "completed" ? "pending" : "completed" }
          : t
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const completeAllTodos = () => {
    const hasPending = todos.some((t) => t.status === "pending");

    setTodos(
      todos.map((t) => ({
        ...t,
        status: hasPending ? "completed" : "pending",
      }))
    );
  };

  const pendingTodosCount = todos.filter((t) => t.status === "pending").length;

  return (
    <div className="flex flex-col gap-2">
      <Header addTodo={addTodo} completeAllTodos={completeAllTodos} />
      <TodoList
        todos={displayedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <Footer count={pendingTodosCount} filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default App;
