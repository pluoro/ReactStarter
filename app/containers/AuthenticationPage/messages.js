import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.AuthenticationPage';

export default defineMessages({
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign In',
  },
  signOut: {
    id: `${scope}.signOut`,
    defaultMessage: 'Sign Out',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'E-mail',
  },
  emailFormatError: {
    id: `${scope}.emailFormatError`,
    defaultMessage: 'E-mail is not in a valid format',
  },
  emailRequiredError: {
    id: `${scope}.emailRequiredError`,
    defaultMessage: 'E-mail is required',
  },
  usernameOrEmail: {
    id: `${scope}.usernameOrEmail`,
    defaultMessage: 'Username or E-mail',
  },
  usernameOrEmailRequiredError: {
    id: `${scope}.usernameOrEmailRequiredError`,
    defaultMessage: 'Username or E-mail can not be empty',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  passwordConfirm: {
    id: `${scope}.passwordConfirm`,
    defaultMessage: 'Confirm password',
  },
  passwordConfirmError: {
    id: `${scope}.passwordConfirmError`,
    defaultMessage: 'Passwords have to be the same',
  },
  passwordRequiredError: {
    id: `${scope}.passwordRequiredError`,
    defaultMessage: 'Password can not be empty',
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot your password?',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  nameRequiredError: {
    id: `${scope}.nameRequiredError`,
    defaultMessage: 'Name is required',
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: 'Username',
  },
  usernameRequiredError: {
    id: `${scope}.usernameRequiredError`,
    defaultMessage: 'Username is required',
  },
  usernameOccupiedError: {
    id: `${scope}.usernameOccupiedError`,
    defaultMessage: 'Username has been already taken',
  },
  terms: {
    id: `${scope}.terms`,
    defaultMessage: 'Please Read Our Terms and conditions',
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign Up',
  },
  badCredentialsError: {
    id: `${scope}.badCredentialsError`,
    defaultMessage: 'Bad credentials.',
  },
  sendResetLink: {
    id: `${scope}.sendResetLink`,
    defaultMessage: 'Send reset link to email',
  },
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: 'Change password',
  }
});
