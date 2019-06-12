import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from "react-router-dom";
import Header from "components/Header";
import SignIn from "containers/AuthenticationPage/SignIn";
import ForgotPassword from "containers/AuthenticationPage/ForgotPassword";
import ChangePassword from 'containers/AuthenticationPage/ChangePassword';

class AuthenticationPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Sign In</title>
          <meta name="description" content="Feature page of React.js Boilerplate application"/>
        </Helmet>
        <div>
          <Header/>
          <Switch>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/change-password" component={ChangePassword} />
          </Switch>
        </div>
       </div>
    );
  }
}

export default AuthenticationPage;
