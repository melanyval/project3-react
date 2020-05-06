import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
