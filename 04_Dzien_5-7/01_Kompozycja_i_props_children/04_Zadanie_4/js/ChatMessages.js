import React from 'react';
import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
    return (
      <div>
        <ul>
            <ChatMessage message="Wpis z chatu 1" />
            <ChatMessage message="Wpis z chatu 2" />
            <ChatMessage message="Wpis z chatu 3" />
        </ul>
      </div>
    );
};

export default ChatMessages;