import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Discovery from "./containers/Discovery/Discovery";
import Destination from "./containers/Destination/Destination";
import "./App.scss";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Discovery} />
        <Route path="/:destinationSlug" component={Destination} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
