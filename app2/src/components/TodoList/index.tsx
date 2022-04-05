import React from "react";
// //@ts-ignore
// import todoStore from "ContainerRemote/todoStore";

import { stores } from "erick-container-shared";

export default function TodoList() {
  const todos = stores.todoStore((state) => state.todos);
  const removeTodo = stores.todoStore((state) => state.removeTodo);

  function handleRemoveTodo(name: string) {
    removeTodo(name);
  }

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {todos.map((todo, index) => (
        <div
          key={`${index}${todo.name}`}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            width: "100%",
            justifyContent: "space-between",
            border: "solid 2px tomato",
            marginBottom: "0.5rem",
          }}
        >
          <span>{todo.name}</span>
          <button
            onClick={() => handleRemoveTodo(todo.name)}
            style={{
              border: "none",
              cursor: "pointer",
              backgroundColor: "tomato",
              color: "#fff",
              fontSize: "1rem",
              padding: "0.5rem",
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
