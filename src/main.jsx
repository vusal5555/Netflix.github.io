import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NetflixContextProvider } from "./context/NetflixAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <NetflixContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NetflixContextProvider>
  // </React.StrictMode>
);
