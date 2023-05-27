import { signal, computed, effect } from "@preact/signals-react";
import { nanoid } from "nanoid";

import { Filter, Todo } from "./types";

export const todos = signal<Todo[]>([]);

export const filter = signal<Filter>("ALL");

effect(() => console.log("filter", filter.value));

export const count = computed(() => {
  return todos.value.filter((t) => t.status === "pending").length;
});

export const displayedTodos = computed(() => {
  return todos.value.filter((t) =>
    filter.value === "ALL"
      ? true
      : filter.value === "COMPLETED"
      ? t.status === "completed"
      : t.status === "pending"
  );
});

export const addTodo = (text: string) => {
  todos.value = [...todos.value, { id: nanoid(), text, status: "pending" }];
};

export const toggleTodo = (
  id: string,
  currentStatus: "completed" | "pending"
) => {
  todos.value = todos.value.map((t) =>
    t.id !== id
      ? t
      : {
          ...t,
          status: currentStatus === "completed" ? "pending" : "completed",
        }
  );
};

export const removeTodo = (id: string) => {
  const index = todos.value.findIndex((t) => t.id === id);
  todos.value.splice(index, 1);
  todos.value = [...todos.value];
};

export const toggleAllTodos = () => {
  const hasPending = todos.value.some((t) => t.status === "pending");

  todos.value = todos.value.map((t) => ({
    ...t,
    status: hasPending ? "completed" : "pending",
  }));
};

export const updateFilter = (newFilter: Filter) => {
  filter.value = newFilter;
};
