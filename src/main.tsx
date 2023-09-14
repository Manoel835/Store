import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Page/App.tsx";
import { GlobalStyles } from "./style/index.ts";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
      <Rotas />
    </BrowserRouter>
  </React.StrictMode>
);
