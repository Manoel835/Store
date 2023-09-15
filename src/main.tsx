import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Page/App.tsx";
import { GlobalStyles } from "./style/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
