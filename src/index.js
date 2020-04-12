import React from "react";
import ReactDOM from "react-dom";
import { WeatherContextProvider } from "./data/weatherContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
  document.getElementById("root")
);
