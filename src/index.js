import React from "react";
import { render, ReactDOM } from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { BrowserRouter } from "react-router-dom";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));