import React from "react";
import { ChatWidget } from "./components/ChatWidget.js";

export function App() {
  return (
    <div>
      <h1>React App</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos
        delectus voluptatem ab repellat saepe eos molestiae cupiditate, omnis
        doloremque, necessitatibus totam consectetur porro sint quam libero
        aperiam? Laborum, quaerat?
      </p>

      <p style={{ marginTop: "200vh" }}>random text</p>
      <ChatWidget />
    </div>
  );
}
