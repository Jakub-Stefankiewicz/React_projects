import React from "react";
import { createRoot } from "react-dom/client";
import Holidays from "./Holidays";

const App = () => <Holidays keyId="e92601251-c0a2-4s63-v73f-54041195480f"/>
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
