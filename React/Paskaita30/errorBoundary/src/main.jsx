import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import errorFalbackComponent from "./components/ErrorFalbackComponent/ErrorFalbackComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={errorFalbackComponent}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
