import React from "react";
import { createRoot } from "react-dom/client";

const colour=prompt("Podaj kolor: red, green lub blue")

const result= (col) => {
    switch (col) {
        case "red": return <div style={ {width: 100, height: 100, borderStyle: "solid", borderWidth: 5, borderColor: "red"  } } />
        case "green": return <div style={ {width: 100, height: 100, borderStyle: "solid", borderWidth: 5, borderColor: "green"  } } />
        case "blue": return <div style={ {width: 100, height: 100, borderStyle: "solid", borderWidth: 5, borderColor: "blue"  } } />
        default: return <div>Niepoprawny kolor</div>
    }
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(result(colour));
