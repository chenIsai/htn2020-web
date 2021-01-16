import React from "react";
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
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
