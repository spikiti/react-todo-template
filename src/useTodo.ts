import { useCallback, useState } from "react";
import { nanoid } from "nanoid";

import { Todo } from "./types";

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((text: string) => {
    setTodos((todos) => [...todos, { id: nanoid(), text, status: "pending" }]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((todos) =>
      todos.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === "completed" ? "pending" : "completed",
            }
          : t
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }, []);

  const toggleAllTodos = useCallback(() => {
    setTodos((todos) => {
      const hasPending = todos.some((t) => t.status === "pending");

      return todos.map((t) => ({
        ...t,
        status: hasPending ? "completed" : "pending",
      }));
    });
  }, []);

  return { todos, addTodo, toggleTodo, deleteTodo, toggleAllTodos };
};
