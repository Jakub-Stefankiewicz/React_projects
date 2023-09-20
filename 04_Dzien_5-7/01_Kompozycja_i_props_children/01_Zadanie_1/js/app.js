import React, {Component} from "react";
import {createRoot} from "react-dom/client";



const container = document.getElementById("app");
const root = createRoot(container);

const GrandchildrenComponent = (props) => {
    return (
        <h1>{props.children}</h1>
    )
}
const ChildComponent = (props) =>{
    return (
        <GrandchildrenComponent>
            {props.children}
        </GrandchildrenComponent>
    )
}

const ParentComponent = (props) => {
    return (
        <ChildComponent>
            {props.children}
        </ChildComponent>
    )
}


root.render(<ParentComponent>
    <h1>To działa!</h1>
</ParentComponent>);
