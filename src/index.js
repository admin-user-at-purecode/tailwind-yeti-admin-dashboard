import React from "react";
import { createRoot } from "react-dom/client";

import "line-awesome/dist/line-awesome/css/line-awesome.css";
import "./style.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
