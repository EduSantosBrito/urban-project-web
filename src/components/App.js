import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
