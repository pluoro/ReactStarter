/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import {Route, Switch} from "react-router-dom";
import "css/index.scss";
import HomePage from "../HomePage";
import AuthenticationPage from "containers/AuthenticationPage/Loadable";
import AuthenticatedPage from "../AuthenticatedPage";

export default function App(){
  return (
    <div>
      <Helmet titleTemplate="%s - Testerjob" defaultTitle="Testerjob">
        <meta name="description" content="Testerjob application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-in" component={AuthenticationPage} />
        <Route exact path="/forgot-password" component={AuthenticationPage} />
        <Route exact path="/change-password" component={AuthenticationPage} />
        <Route exact path="/dashboard" component={AuthenticatedPage} />
        <Route exact path="/reviews" component={AuthenticatedPage} />
        <Route exact path="/products" component={AuthenticatedPage} />
        <Route exact path="/tests" component={AuthenticatedPage} />
        <Route exact path="/payments" component={AuthenticatedPage} />
        <Route exact path="/settings" component={AuthenticatedPage} />
        <Route exact path="/help" component={AuthenticatedPage} />
      </Switch>
    </div>
  );
}
