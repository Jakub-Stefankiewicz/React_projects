import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const numberA = parseInt(prompt("Podaj liczbę A"))
const numberB = parseInt(prompt("Podaj liczbę B"))
const operation = prompt("Podaj +, -, * lub /")

const calc = (a, b, operation) => {
    switch (operation) {
        case "+":
            return <h1> { a + b }</h1>
        case "-":
            return <h2> { a - b }</h2>
        case "*":
            return <h3> { a * b }</h3>
        case "/":
            return <h4> { a / b }</h4>
        default:
            return <h4>podałeś źle co ma wykonać, daj + - * lub /</h4>;
    }
}

root.render(calc(numberA, numberB, operation))


