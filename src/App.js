import React from "react";
import {HashRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login"/>
        </Route>
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
