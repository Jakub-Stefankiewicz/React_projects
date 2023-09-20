import React from "react";
import { createRoot } from "react-dom/client";
import Pokemon from "./Pokemon";

const App = () => <Pokemon/>
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
