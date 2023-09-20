import React from "react";
import {createRoot} from "react-dom/client";
import StrobeLight from "./StrobeLight";

const App = () => <StrobeLight freq="1000" color="red"/>
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
