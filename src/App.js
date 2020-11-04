import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
