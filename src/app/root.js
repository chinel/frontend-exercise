import "./main.css";

import * as React from "react";

import { UniversalRouter } from "./universal-router";

import { Switch, Route } from "react-router-dom";
import HomePage from "./pages";
import DetailsPage from "./pages/detail";

export function Root(props) {
  return (
    <UniversalRouter location={props.location}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/list/:id" component={DetailsPage} />
      </Switch>
    </UniversalRouter>
  );
}
