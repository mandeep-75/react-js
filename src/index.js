import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Body } from "./components/Body.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>
);
