import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Board from "../boardgame/Board";
import EndGame from "../endgame/EndGame";
function Layout() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/boardgame" exact component={Board} />
        <Route path="/endgame" exact component={EndGame} />
      </Switch>
    </Router>
  );
}

export default Layout;
