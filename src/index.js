import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const renderApp = () => {
  try {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById("root")
    );
  } catch (error) {
    console.warn("Render exception!", error);
  }
};

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept("./App.js", () => {
    renderApp();
  });
}

renderApp();
