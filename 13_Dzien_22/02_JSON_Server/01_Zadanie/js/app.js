import React from "react";
import {createRoot} from "react-dom/client";
import CarsManager from "./CarsManager";

const App = () => <CarsManager/>
const container=document.getElementById("app")
const root=createRoot(container);
root.render(<App/>)