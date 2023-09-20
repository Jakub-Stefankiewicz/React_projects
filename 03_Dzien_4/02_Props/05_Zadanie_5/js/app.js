import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Menu from "./Menu";

const menu=[
    {
        url: "/",
        text: "Strona główna"
    },
    {
        url: "/blog",
        text: "Blog"
    },
    {
        url: "/cennik",
        text: "Cennik"
    },
    {
        url: "/kontakt",
        text: "Kontakt"
    }
]


const container = document.getElementById("app");
const root = createRoot(container);

const App = () =>{
    return <Menu menu={menu} />
}

root.render(<App />);
