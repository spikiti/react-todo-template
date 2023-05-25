import { Dispatch, SetStateAction } from "react";

export type Todo = {
  id: string;
  text: string;
  status: "completed" | "pending";
};

export type Filter = "ALL" | "PENDING" | "COMPLETED";

export type TodoDispatch = Dispatch<SetStateAction<Todo[]>>;

export type FilterDispatch = Dispatch<SetStateAction<Filter>>;
