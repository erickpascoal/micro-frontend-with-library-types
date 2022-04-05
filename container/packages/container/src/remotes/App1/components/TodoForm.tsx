import React, { Suspense } from "react";
//@ts-ignore
const TodoFormRemote = React.lazy(() => import("App1/TodoForm"));

export function TodoForm() {
  return (
    <Suspense fallback={""}>
      <TodoFormRemote />
    </Suspense>
  );
}
