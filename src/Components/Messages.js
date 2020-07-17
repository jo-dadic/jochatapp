import React from "react";

export default function Messages({ messages, member }) {
  return (
    <ul>
      {messages.map((msg) => {
        return (
          <li key={msg.id + msg.clientId}>
            {member}: {msg.data}
          </li>
        );
      })}
    </ul>
  );
}
