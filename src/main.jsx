import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import DarkModeProvider from "./context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DarkModeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DarkModeProvider>
  </BrowserRouter>
);
