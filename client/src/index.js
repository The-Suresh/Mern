import React from "react";
import ReactDOM from "react-dom/client"; // Import the correct method
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// Create root and render using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
