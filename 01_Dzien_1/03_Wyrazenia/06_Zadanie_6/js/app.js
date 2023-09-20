import React from "react";
import { createRoot } from "react-dom/client";
import animals from './data/animals';


const container = document.getElementById("app");
const root = createRoot(container);

const animaltext = (el) => {
    return (
        <section>
            <p>Liczba zwierząt {el.length}</p>
            <p>Zwierzęta {el}</p>
        </section>
    )
}

root.render(animaltext(animals.join(' - ')));

