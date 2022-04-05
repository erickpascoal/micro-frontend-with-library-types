import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";

const App = () => <TodoList />;
ReactDOM.render(<App />, document.getElementById("app"));
