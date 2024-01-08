import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-slate-950">
    <React.StrictMode>
      <Home></Home>
    </React.StrictMode>
  </div>
);
