import { atom } from "jotai";

import { Filter, Todo } from "./types";

export const todosAtom = atom<Todo[]>([]);

export const filterAtom = atom<Filter>("ALL");

export const countAtom = atom(
  (get) => get(todosAtom).filter((t) => t.status === "pending").length
);

export const displayedAtoms = atom((get) => {
  const todos = get(todosAtom);
  const filter = get(filterAtom);

  return todos.filter((t) =>
    filter === "ALL"
      ? true
      : filter === "COMPLETED"
      ? t.status === "completed"
      : t.status === "pending"
  );
});

export const addTodoAtom = atom(null, (_, set, update: Todo) => {
  set(todosAtom, (todos) => [...todos, update]);
});
