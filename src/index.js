import React from "react";
import ReactDom from "react-dom";
import TodoApp from "./components/TodoApp";
import "./App.css";

const element = <TodoApp />;

ReactDom.render(element, document.getElementById("root"));
