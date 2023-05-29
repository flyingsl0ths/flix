import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="mt-5 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold italic">Flix</h1>
      <App />
    </div>
  </React.StrictMode>
);
