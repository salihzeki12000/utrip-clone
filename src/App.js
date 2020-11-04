import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Discovery from "./containers/Discovery/Discovery";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Discovery} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
