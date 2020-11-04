import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Landing from "./Landing/Landing.jsx";

export default class App extends React.Component {
  render() {
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
}
