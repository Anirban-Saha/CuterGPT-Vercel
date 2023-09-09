"use client";
import React from "react"; 
import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  
  return (
    <div>
      {messages.map((message) => (
        <span key={message.id}>
          {message.role} : {message.content}
        </span>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          value={input}
          onChange={handleInputChange} 
          placeholder="Enter text"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
