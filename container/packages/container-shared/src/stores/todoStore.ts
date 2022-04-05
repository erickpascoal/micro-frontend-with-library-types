//@ts-ignore
import todoStoreRemote from "ContainerRemote/todoStore";
import { StoreApi, UseBoundStore } from "zustand";

export type Todo = {
  name: string;
};

export type TodoStore = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (name: string) => void;
};

export const todoStore: UseBoundStore<
  TodoStore,
  StoreApi<TodoStore>
> = todoStoreRemote;
