import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import ShopItem from "./ShopItem";

const container = document.getElementById("app");
const root = createRoot(container);

const item= {
    title: "MacBook Pro",
    image: "https://bi.im-g.pl/im/8a/81/14/z21503370AMP,-Matrix---Trinity--Neo-i-Morfeusz--Tego-tercetu-w-.jpg",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
}

const App=() => {
    return <ShopItem item={item} />
}


root.render(<App />);
