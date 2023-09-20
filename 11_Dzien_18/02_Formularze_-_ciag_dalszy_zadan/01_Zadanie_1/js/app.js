import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import PESELinput from "./PESELinput";

const App = () => <PESELinput/>
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>)

