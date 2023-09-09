"use client";
import { useChat } from "ai/react";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
      {messages.map((message) => {
        return (
          <span key={message.id}>
            {message.role} : {message.content}
          </span>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          
          placeholder="Enter a message"
        />
      </form>
    </div>
  );
}
