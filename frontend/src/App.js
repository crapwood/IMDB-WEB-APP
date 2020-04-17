import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./pages/navbar";

// PAGES
import Home from "./pages/Home/home.js";
import Movies from "./pages/Movies/movies.js";
import TvShows from "./pages/TV_Shows/tv.js";
import Search from "./pages/Adv_Search/search.js";

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/tvshows" component={TvShows} />
            <Route exact path="/advance-search" component={Search} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
