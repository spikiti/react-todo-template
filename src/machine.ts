import { nanoid } from "nanoid";
import { assign, createMachine } from "xstate";
import { createActorContext } from "@xstate/react";

import { Filter, Todo } from "./types";

type Context = {
  todos: Todo[];
  filter: Filter;
};

type Events =
  | { type: "ADD_TODO"; payload: { text: string } }
  | {
      type: "TOGGLE_TODO";
      payload: { id: string; status: "pending" | "completed" };
    }
  | { type: "REMOVE_TODO"; payload: { id: string } }
  | { type: "TOGGLE_ALL_TODOS" }
  | { type: "CHANGE_FILTER"; payload: { filter: Filter } };

const machine = createMachine<Context, Events>({
  id: "todos",
  context: {
    todos: [],
    filter: "ALL",
  },
  on: {
    ADD_TODO: {
      actions: assign({
        todos: ({ context, event }) => {
          const newTodo: Todo = {
            id: nanoid(),
            text: event.payload.text,
            status: "pending",
          };

          return [...context.todos, newTodo];
        },
      }),
    },
    TOGGLE_TODO: {
      actions: assign({
        todos: ({ context, event }) => {
          const { id, status: currentStatus } = event.payload;

          return context.todos.map((t) =>
            t.id !== id
              ? t
              : {
                  ...t,
                  status:
                    currentStatus === "completed" ? "pending" : "completed",
                }
          );
        },
      }),
    },
    REMOVE_TODO: {
      actions: assign({
        todos: ({ context, event }) =>
          context.todos.filter((t) => t.id !== event.payload.id),
      }),
    },
    TOGGLE_ALL_TODOS: {
      actions: assign({
        todos: ({ context }) => {
          const hasPending = context.todos.some((t) => t.status === "pending");
          const newTodos: Todo[] = context.todos.map((t) => ({
            ...t,
            status: hasPending ? "completed" : "pending",
          }));

          return newTodos;
        },
      }),
    },
    CHANGE_FILTER: {
      actions: assign({
        filter: ({ event }) => event.payload.filter,
      }),
    },
  },
});

export const AppContext = createActorContext(machine);
