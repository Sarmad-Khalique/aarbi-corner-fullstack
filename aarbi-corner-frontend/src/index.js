import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import RootProider from "./context/root-provider";

ReactDOM.render(
  <React.StrictMode>
    <RootProider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootProider>
  </React.StrictMode>,
  document.getElementById("root")
);
