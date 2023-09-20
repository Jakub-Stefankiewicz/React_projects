import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Hello, World!</h1>);

const numberA=parseInt(prompt("Podaj liczbę A"))
const numberB=parseInt(prompt("Podaj liczbę B"))

root.render(<h1>{numberA + numberB}</h1>);