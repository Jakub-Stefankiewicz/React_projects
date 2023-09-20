import React from "react";
import { createRoot } from "react-dom/client";

const redStyle={
  backgroundColor: "red",
  height: 100
}

const redDiv = <div style={redStyle} />;
const greenDiv = <div style={{backgroundColor: "green", height: 100}}  />;
const blueDiv = <div style={{backgroundColor: "blue", height: 100}}  />;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <>
    {redDiv}
    {greenDiv}
    {blueDiv}
  </>
);
