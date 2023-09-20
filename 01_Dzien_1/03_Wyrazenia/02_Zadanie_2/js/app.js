import React from "react";
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const age = parseInt(prompt("Podaj rok urodzenia w formacie YYY"));

root.render(<h1>Masz lat {new Date().getFullYear() - age}</h1>);

