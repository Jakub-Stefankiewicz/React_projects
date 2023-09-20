import React, {Fragment} from "react";
import { createRoot } from "react-dom/client";
import people from "./data/people"

const list = (
    <ul>
        {
            people.map(el => {
                return <>
                    <div key={el.name}>{el.name}</div>
                    <div key={el.surname}>{el.surname}</div>
                </>
            })
        }
    </ul>
)


const container = document.getElementById("app");
const root = createRoot(container);
root.render(list);
