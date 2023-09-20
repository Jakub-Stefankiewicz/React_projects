import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import NAme from "./NAme";
import Name2 from "./Name2";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
    <NAme name="Janek" surname="Kowalski"/>
    <Name2 name="Drugie" surname="nazwisko"/>
</>);
