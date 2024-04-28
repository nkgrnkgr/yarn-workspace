import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <h1>Hello, world!</h1>
      <Button />
    </div>
  </React.StrictMode>,
);
