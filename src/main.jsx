import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const baseName =
  import.meta.env.MODE === "development"
    ? ""
    : "https://leticyaalbuquerque.github.io/space-tourism/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </>
);
