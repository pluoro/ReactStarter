import React from 'react';
import { Helmet } from 'react-helmet';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import { login, register } from "providers/AuthProvider/Redux/actions";
import {Form, Field} from "react-final-form";
import messages from "../messages";
import { FormattedMessage } from "react-intl";
import Input from 'components/Form/Input';
import loginValidation from "containers/AuthenticationPage/validation/login";
import registerValidation from "containers/AuthenticationPage/validation/register";
import { setActiveTab } from 'providers/AuthProvider/Redux/actions';
import { makeSelectActiveTab, makeSelectAuthError } from 'providers/AuthProvider/Redux/selectors';
import { NavLink } from 'react-router-dom';

class SignIn extends React.Component {
  onRegisterSubmit = (values) => {
    let {onRegister} = this.props;
    let {username, name, email, password} = values;
    onRegister({username, name, email, password});
  };

  onLoginSubmit =  (values) => {
    let {onLogin} = this.props;
    let {usernameOrEmail, password} = values;
    onLogin({usernameOrEmail, password});
  };

  setActiveTab = (e) => {
    const {name} = e.target;
    const {onSetActiveTab} = this.props;
    onSetActiveTab(name);
  };

  render() {
    const {activeTab, authError} = this.props;
    return (
      <div>
        <Helmet>
          <title>Sign In</title>
          <meta name="description" content="Feature page of React.js Boilerplate application"/>
        </Helmet>
        <div>
          <div className="centered-content sign-in-page">
            <div className="container">
              <div className="container">
                <div className="box left">
                  <h1>WEBSITE NAME</h1>
                  <div className="tabs">
                    <span className={`tab signin ${activeTab === 'sign-in' ? 'active': ''}`}><a onClick={this.setActiveTab} name="sign-in"><FormattedMessage {...messages.signIn}/></a></span>
                    <span className={`tab signup ${activeTab === 'sign-up' ? 'active': ''}`}><a onClick={this.setActiveTab} name="sign-up"><FormattedMessage {...messages.signUp}/></a></span>
                  </div>
                  <div className="content">
                    <div className={`info signin-info ${activeTab === 'sign-in' ? 'show': 'hide'}`}>
                      <Form onSubmit={this.onLoginSubmit}
                            validate = {loginValidation}
                            render = { ({ handleSubmit, reset, submitting}) => (
                              <form onSubmit={handleSubmit}>
                                <Field name='usernameOrEmail' render = {({ input, meta }) =><Input message = {messages.usernameOrEmail} errorMessage={messages[meta.error]} input={input} meta={meta}/>} />
                                <Field name='password' render = {({ input, meta }) =><Input type="password" message = {messages.password} errorMessage={messages[meta.error]} input={input} meta={meta}/>} />
                                <div className="submit-wrap">
                                  <div className={"form-error"}>
                                    {authError && <FormattedMessage {...messages[authError]}/>}
                                  </div>
                                  <button  disabled={submitting} type="submit"  className="submit"><FormattedMessage {...messages.signIn}/></button>
                                  <NavLink to="/forgot-password" className="extra-link"><FormattedMessage {...messages.forgotPassword}/></NavLink>
                                </div>
                              </form>
                            )} />
                    </div>
                    <div className={`info signup-info ${activeTab === 'sign-in' ? 'hide': 'show'}`}>
                      <Form onSubmit={this.onRegisterSubmit}
                            validate = {registerValidation}
                            render = { ({ handleSubmit, reset, submitting}) => (
                              <form onSubmit={handleSubmit}>
                                <Field name='name' render = {({ input, meta }) =><Input message = {messages.name} errorMessage={messages[meta.error]} input={input} meta={meta}/>} />
                                <Field name='email' render = {({ input, meta }) =><Input message = {messages.email} errorMessage={messages[meta.error]} input={input} meta={meta}/>} />
                                <Field name='username' render = {({ input, meta }) =><Input message = {messages.username} errorMessage={messages[meta.error]} input={input} meta={meta}/>} />
                                <Field name='password' render = {({ input, meta }) =><Input type="password"message = {messages.password} errorMessage={messages[meta.error]} input={input} meta={meta}/>} />
                                <div className="submit-wrap">
                                  <div className={"form-error"}>
                                    {authError && <FormattedMessage {...messages[authError]}/>}
                                  </div>
                                  <button  disabled={submitting} type="submit" className="submit"><FormattedMessage {...messages.signUp}/></button>
                                </div>
                              </form>
                            )} />
                    </div>
                  </div>
                </div>
                <div className="box right"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLogin: data => {
      dispatch(login(data));
    },
    onRegister: data => {
      dispatch(register(data));
    },
    onSetActiveTab: data => {
      dispatch(setActiveTab(data));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  activeTab: makeSelectActiveTab(),
  authError: makeSelectAuthError()
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
