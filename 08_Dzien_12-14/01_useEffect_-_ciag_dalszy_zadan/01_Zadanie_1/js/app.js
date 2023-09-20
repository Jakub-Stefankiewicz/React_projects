import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import ShowInfo from "./ShowInfo";
import PropsToState from "./PropsToState";

const App = () => <PropsToState text="cośtam"/>
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
