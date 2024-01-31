import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TranslationProvider } from "./i18n/i18n.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
);
