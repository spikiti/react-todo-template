export type Todo = {
  id: string;
  text: string;
  status: "completed" | "pending";
};

export type Filter = "ALL" | "PENDING" | "COMPLETED";
