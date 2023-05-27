import { proxy } from "valtio";
import { nanoid } from "nanoid";

import { Filter, Status, Todo } from "./types";

type Store = { filter: Filter; todos: Todo[] };

export const state = proxy<Store>({
  todos: [],
  filter: "ALL",
});

export const actions = {
  addTodo(text: string) {
    state.todos.push({ id: nanoid(), text, status: "pending" });
  },
  removeTodo(id: string) {
    state.todos = state.todos.filter((t) => t.id !== id);
  },
  toggleTodo(id: string, currentStatus: Status) {
    const index = state.todos.findIndex((t) => t.id === id);

    if (index >= 0) {
      state.todos[index].status =
        currentStatus === "pending" ? "completed" : "pending";
    }
  },
  toggleAllTodos() {
    const hasPending = state.todos.some((t) => t.status === "pending");

    state.todos = state.todos.map((t) => ({
      ...t,
      status: hasPending ? "completed" : "pending",
    }));
  },
  setFilter(filter: Filter) {
    state.filter = filter;
  },
};
