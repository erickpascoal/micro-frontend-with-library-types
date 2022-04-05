import React, { Suspense } from "react";
//@ts-ignore
const TodoListRemote = React.lazy(() => import("App2/TodoList"));

export function TodoList() {
  return (
    <Suspense fallback={""}>
      <TodoListRemote />
    </Suspense>
  );
}
