import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoForm";

import "./index.css";

const App = () => <TodoForm />;
ReactDOM.render(<App />, document.getElementById("app"));
