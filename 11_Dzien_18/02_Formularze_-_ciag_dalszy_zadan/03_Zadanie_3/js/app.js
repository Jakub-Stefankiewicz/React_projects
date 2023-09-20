import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import DynamicLego from "./DynamicLego";

const App = () => <DynamicLego/>
const container = document.getElementById("app");
const root=createRoot(container);
root.render(<App/>)
