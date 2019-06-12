import React from "react";
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import { Field, Form } from 'react-final-form';
import { forgotPassword } from "providers/AuthProvider/Redux/actions";
import  forgotPasswordValidation from "containers/AuthenticationPage/validation/forgotPassword";
import Input from 'components/Form/Input';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectAuthError } from 'providers/AuthProvider/Redux/selectors';


class ForgotPassword extends React.Component{

  onForgotPasswordSubmit = (values) => {
    const {onForgotPassword} = this.props;
    const {usernameOrEmail} = values;
    onForgotPassword(usernameOrEmail)
  };

  render(){
    const {authError} = this.props;
    return (
      <div>
        <Helmet>
          <title>Forgot Password</title>
          <meta name="description" content="Feature page of React.js Boilerplate application"/>
        </Helmet>
        <div>
          <div className="centered-content sign-in-page">
            <div className="container">
              <div className="container">
                <div className="box left">
                  <h1><FormattedMessage {...messages.forgotPassword}/></h1>
                  <div className="content">
                    <div className={`info signin-info`}>
                      <Form onSubmit={this.onForgotPasswordSubmit}
                            validate = {forgotPasswordValidation}
                            render = { ({ handleSubmit, reset, submitting}) => (
                              <form onSubmit={handleSubmit}>
                                <Field name='usernameOrEmail' render = {({ input, meta }) =><Input message = {messages.usernameOrEmail} errorMessage={messages[meta.error]} input={input} meta={meta}/>} />
                                <div className="submit-wrap">
                                  <div className={"form-error"}>
                                    {authError && <FormattedMessage {...messages[authError]}/>}
                                  </div>
                                  <button disabled={submitting} type="submit"  className="submit"><FormattedMessage {...messages.sendResetLink}/></button>
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
    )
  }

}

export function mapDispatchToProps(dispatch) {
  return {
    onForgotPassword: data => {
      dispatch(forgotPassword(data));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  authError: makeSelectAuthError()
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
