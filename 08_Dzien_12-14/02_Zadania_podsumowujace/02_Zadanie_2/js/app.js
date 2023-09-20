import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import AnotherColor from "../../01_Zadanie_1/js/AnotherColor";
// import App from "../../../../03_Dzien_4/03_Zagniezdzanie_i_dzielenie/01_Zadanie_1/js/App";
import MathQuestionGame from "./MathQuestionGame";

const App = () => <MathQuestionGame/>
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
