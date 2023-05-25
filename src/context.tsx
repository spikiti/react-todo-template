import { ReactNode, createContext, useState } from "react";

import { Todo, TodoDispatch, Filter, FilterDispatch } from "./types";

export const TodosContext = createContext<Todo[]>([]);

export const TodosDispatchContext = createContext<TodoDispatch>(() => {});

export const FilterContext = createContext<Filter>("ALL");

export const FilterDispatchContext = createContext<FilterDispatch>(() => {});

type Props = {
  children: ReactNode;
};

export const TodosProvider = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={setTodos}>
        {props.children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export const FilterProvider = (props: Props) => {
  const [filter, setFilter] = useState<Filter>("ALL");

  return (
    <FilterContext.Provider value={filter}>
      <FilterDispatchContext.Provider value={setFilter}>
        {props.children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  );
};
