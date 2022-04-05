import React, { FormEvent, useEffect } from "react";

import { stores } from "erick-container-shared";
import { CountForm } from "../CountForm";
import countStore from "../../stores/countStore";

export default function TodoForm() {
  const addTodo = stores.todoStore((state) => state.addTodo);
  const inc = countStore((state) => state.inc);
  const dec = countStore((state) => state.dec);

  const [value, setValue] = React.useState("");

  function handleAddTodo(e: FormEvent) {
    e.preventDefault();

    if (!!value) {
      addTodo({ name: value });
      setValue("");
    }
  }

  useEffect(() => {}, []);

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
      <CountForm />
      <button onClick={dec}>dec</button>
      <button onClick={inc}>inc</button>
    </div>
  );
}
