import React from "react";
import {createRoot} from "react-dom/client";
import products from "./data/products";
import Receipt from "./data/Receipt";

let sum = 0;
const result = (value) => {
        products.forEach(el => {
            value=value+el.single_price*el.qty;
        })
    return value;
}

const App = () => {
    return <Receipt items={products} sum={result(sum)}/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
