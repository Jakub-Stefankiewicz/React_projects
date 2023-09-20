import React from "react";
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const numberA = parseInt(prompt("Podaj liczbę A"))
const numberB = parseInt(prompt("Podaj liczbę B"))
const operation = prompt("Podaj +, -, * lub /")

switch (operation) {
    case "+":
        root.render(<h1>{numberA + numberB}</h1>);
        break;
    case "-":
        root.render(<h2>{numberA - numberB}</h2>);
        break;
    case "*":
        root.render(<h3>{numberA * numberB}</h3>);
        break;
    case "/":
        root.render(<h4>{numberA / numberB}</h4>);
        break;
    default:
        root.render(<h4>podałeś źle co ma wykonać, daj + - * lub /</h4>);
}






