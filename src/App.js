import React from "react";
import {HashRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Initialize from "./components/initialize";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Initialize />
        </Route>
        <Route path="/details">
          <div>
            Placeholder
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;