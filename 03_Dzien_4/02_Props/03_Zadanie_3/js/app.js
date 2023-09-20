import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Sum from "./Sum";

const container = document.getElementById("app");
const root = createRoot(container);
const arr=[1,10,50];
root.render(<Sum arr={arr}/>);
