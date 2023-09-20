import React from "react";
import {createRoot} from "react-dom/client";
import ShowUserClass from "./ShowUserClass";
import ShowUserFunc from "./ShowUserFunc";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <>
            <ShowUserClass name="Kuba" surname = "Stef"/>
            <ShowUserFunc name="Kuba" surname = "Stef" />
        </>
    )
}

root.render(<App />);
