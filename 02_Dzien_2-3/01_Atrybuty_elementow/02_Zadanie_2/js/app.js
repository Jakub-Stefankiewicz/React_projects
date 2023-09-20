import React from "react";
import {createRoot} from "react-dom/client";

function genNumber() {
    return Math.round(Math.random() * 9 + 1);
}

const A = genNumber();
const B = genNumber();
const result = prompt(`podaj wynik dodawania ${A} i ${B} `)

const response = (a, b, res) => {
    if (a + b === parseInt(res)) {
        return <div style={{backgroundColor: "green"}}>Odpowiedź poprawna</div>
    } else {
        return <div style={{backgroundColor: "red"}}>Odpowiedź niepoprawna</div>
    }
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(response(A, B, result));
