import React, { FormEvent } from "react";

import { stores } from "erick-container-shared";

export default function TodoForm() {
  const addTodo = stores.todoStore((state) => state.addTodo);

  const [value, setValue] = React.useState("");

  function handleAddTodo(e: FormEvent) {
    e.preventDefault();

    if (!!value) {
      addTodo({ name: value });
      setValue("");
    }
  }

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nome da tarefa"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: "1rem",
            backgroundColor: "tomato",
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
            border: "none",
          }}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
