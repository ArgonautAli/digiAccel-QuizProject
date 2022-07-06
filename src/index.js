import React from "react";

import "./index.css";
import App from "./App";
import AdminPanel from "./AdminPanel";
import UserPanel from "./UserPanel";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route exact path="/" element={<App />}/>
        <Route exact path="/adminpanel" element={<AdminPanel/>}/>
        <Route exact path="/userpanel" element={<UserPanel/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
