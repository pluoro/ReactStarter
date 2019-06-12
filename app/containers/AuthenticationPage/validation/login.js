export default function(values) {
  const {usernameOrEmail, password} = values;
  const errors = {};
  if(!usernameOrEmail || (usernameOrEmail && !usernameOrEmail.trim()) ){
    errors['usernameOrEmail'] = "usernameOrEmailRequiredError";
  }
  if(!password || (password && !password.trim())){
    errors['password'] = "passwordRequiredError";
  }
  return errors;
}
