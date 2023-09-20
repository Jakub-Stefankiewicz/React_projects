import React from "react";
import { createRoot } from "react-dom/client";
import ToDoList from "./ToDoList";

const App = () => <ToDoList/>
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
