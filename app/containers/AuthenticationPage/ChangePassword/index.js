import React from "react";
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import { Field, Form } from 'react-final-form';
import { changePassword, checkHash } from "providers/AuthProvider/Redux/actions";
import  changePasswordValidation from "containers/AuthenticationPage/validation/changePassword";
import Input from 'components/Form/Input';
import history from "utils/history"
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectAuthError, makeSelectRequestedUserForUpdate } from 'providers/AuthProvider/Redux/selectors';

class ChangePassword extends React.Component{
  componentDidMount() {
    const {location} = history;
    const {search} = location;
    const hash = search.slice(6);
    const {onCheckHash} = this.props;
    onCheckHash(hash);// will trim ?hash= part
    // call some method to check hash validity
    // if hash is bad return to login and if not continue with changing password process
  }

  onChangePasswordSubmit = (values) => {
    const {onChangePassword, requestedUserForUpdate} = this.props;
    const {password} = values;
    onChangePassword({password, id: requestedUserForUpdate})
  };

  render(){
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
                      <Form onSubmit={this.onChangePasswordSubmit}
                            validate = {changePasswordValidation}
                            render = { ({ handleSubmit, reset, submitting}) => (
                              <form onSubmit={handleSubmit}>
                                <Field name='password' render = {({ input, meta }) =><Input message = {messages.password} errorMessage={messages[meta.error]} input={input} meta={meta}/>} />
                                <Field name='passwordConfirm' render = {({ input, meta }) =><Input message = {messages.passwordConfirm} errorMessage={messages[meta.error]} input={input} meta={meta}/>} />
                                <div className="submit-wrap">
                                  <div className={"form-error"}>
                                    {/*{authError && <FormattedMessage {...messages[authError]}/>}*/}
                                  </div>
                                  <button  disabled={submitting} type="submit"  className="submit"><FormattedMessage {...messages.changePassword}/></button>
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
    onChangePassword: data => {
      dispatch(changePassword(data));
    },
    onCheckHash: data => {
      dispatch(checkHash(data));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  authError: makeSelectAuthError(),
  requestedUserForUpdate: makeSelectRequestedUserForUpdate()
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
