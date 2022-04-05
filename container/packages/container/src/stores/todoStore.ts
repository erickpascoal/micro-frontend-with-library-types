import create from "zustand";

export type Todo = {
  name: string;
};

export type TodoStore = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (name: string) => void;
};

const todoStore = create<TodoStore>((set, get) => ({
  todos: [{ name: "erick" }],
  setTodos: (todos) => {
    set({ todos: todos });
  },
  addTodo: (todo) => {
    set({ todos: [...get().todos, todo] });
  },
  removeTodo: (name: string) => {
    set({ todos: get().todos.filter((todo) => todo.name !== name) });
  },
}));

export default todoStore;
