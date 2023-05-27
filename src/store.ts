import { create } from "zustand";
import { nanoid } from "nanoid";

import { Filter, Todo } from "./types";

interface State {
  todos: Todo[];
  filter: Filter;
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string, status: "completed" | "pending") => void;
  toggleAllTodos: () => void;
  setFilter: (filter: Filter) => void;
}

export const useStore = create<State>()((set) => ({
  todos: [],
  filter: "ALL",
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: nanoid(), text, status: "pending" }],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
  toggleTodo: (id, currentStatus) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id !== id
          ? t
          : {
              ...t,
              status: currentStatus === "completed" ? "pending" : "completed",
            }
      ),
    })),
  toggleAllTodos: () =>
    set((state) => {
      const hasPending = state.todos.some((t) => t.status === "pending");
      const newTodos: Todo[] = state.todos.map((t) => ({
        ...t,
        status: hasPending ? "completed" : "pending",
      }));

      return {
        todos: newTodos,
      };
    }),
  setFilter: (filter) => set(() => ({ filter })),
}));
