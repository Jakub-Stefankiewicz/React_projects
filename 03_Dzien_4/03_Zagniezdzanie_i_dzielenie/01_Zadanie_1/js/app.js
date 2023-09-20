import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import CurrencyConverter from "./CurrencyConverter";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
}

root.render(<App />);
