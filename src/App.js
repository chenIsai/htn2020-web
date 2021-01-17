import React from "react";
import {HashRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Initialize from "./components/initialize";
import Authenticated from "./components/authenticated"

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Initialize />
        </Route>
        <Route path="/authenticated">
          <Authenticated />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
