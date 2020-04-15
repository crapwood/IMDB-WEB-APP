import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

// PAGES
import Home from "./pages/home.js";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
