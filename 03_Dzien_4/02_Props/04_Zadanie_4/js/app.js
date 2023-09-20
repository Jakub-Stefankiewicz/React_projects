import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import LikeBox from "./LikeBox";

const container = document.getElementById("app");
const root = createRoot(container);
const likes=110;
root.render(<LikeBox likes={likes}/>);
