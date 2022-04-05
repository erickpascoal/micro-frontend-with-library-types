import { TodoForm } from "../../remotes/App1/components/TodoForm";
import { TodoList } from "../../remotes/App2/components/TodoList";
import { hooks, stores } from "erick-container-shared";
import { useEffect } from "react";

export function Home() {
  const todos = stores.todoStore((state) => state.todos);
  const { helloWithName } = hooks.useOi();

  useEffect(() => {
    helloWithName("erick");
  }, []);

  return (
    <>
      <header
        style={{
          padding: "0.5rem",
          backgroundColor: "tomato",
          color: "#fff",
          fontSize: "2rem",
          display: "flex",
        }}
      >
        <span> Tarefas em andamento: {todos?.length}</span>
      </header>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "100%",
          padding: "1rem",
        }}
      >
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}
