import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import AdultStuff from "./AdultStuff";

const App = () => <AdultStuff/>
const container=document.getElementById("app");
const root = createRoot(container);
root.render(<App/>)


