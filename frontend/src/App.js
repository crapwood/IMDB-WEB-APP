import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./pages/navbar";

// PAGES
import Home from "./pages/Home/home.js";

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exactly component={Home} pattern="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
