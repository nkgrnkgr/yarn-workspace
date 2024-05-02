import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/Button";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <h1>Hello, world!</h1>
      <Button size="lg">Click me</Button>
      <Button size="sm">Click me</Button>
    </div>
  </React.StrictMode>,
);
