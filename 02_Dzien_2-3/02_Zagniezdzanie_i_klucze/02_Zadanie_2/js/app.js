import React, {Fragment} from "react";
import { createRoot } from "react-dom/client";
import Person from "./data/person"

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
    <h1>{ Person.title + Person.firstName + Person.lastName }</h1>
    <span>{ Person.age }</span>
    </>
);

