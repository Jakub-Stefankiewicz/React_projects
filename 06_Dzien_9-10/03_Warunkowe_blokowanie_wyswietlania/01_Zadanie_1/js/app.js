import React from "react";
import {createRoot} from "react-dom/client";
import SecretStuff from "./SecretStuff";

const App = () => <SecretStuff password="abc" secretPassword="abc2" secret="sec"/>
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
