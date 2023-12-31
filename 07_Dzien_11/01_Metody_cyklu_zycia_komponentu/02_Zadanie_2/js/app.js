import React from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";

const App = () => <HelloWorld />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
