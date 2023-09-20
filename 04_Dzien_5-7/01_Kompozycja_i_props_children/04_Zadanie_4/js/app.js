import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatMessage from "./ChatMessage";
import NewChatMessage from "./NewChatMessage";

const Chat = () => {
    return (
        <section className="chat" >
            <ChatHeader />
            <ChatMessages />
            <NewChatMessage />
        </section>
    )
}

function App(props) {
  return <Chat />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
