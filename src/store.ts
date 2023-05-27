import { atom, selector } from "recoil";

import { Filter, Todo } from "./types";

export const todosState = atom<Todo[]>({
  key: "todos.list",
  default: [],
});

export const filterState = atom<Filter>({
  key: "todos.filter",
  default: "ALL",
});

export const countState = selector({
  key: "todos.count",
  get: ({ get }) =>
    get(todosState).filter((t) => t.status === "pending").length,
});

export const displayedTodosState = selector({
  key: "todos.filtered",
  get: ({ get }) => {
    const todos = get(todosState);
    const filter = get(filterState);

    return todos.filter((t) =>
      filter === "ALL"
        ? true
        : filter === "COMPLETED"
        ? t.status === "completed"
        : t.status === "pending"
    );
  },
});
