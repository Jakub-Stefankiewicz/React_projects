import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#app"));


const numberA=parseInt(prompt("Podaj liczbę A"))
const numberB=parseInt(prompt("Podaj liczbę B"))

root.render(<h1>{numberA + numberB}</h1>);