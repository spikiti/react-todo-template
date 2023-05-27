export type Status = "completed" | "pending";

export type Todo = {
  id: string;
  text: string;
  status: Status;
};

export type Filter = "ALL" | "PENDING" | "COMPLETED";
