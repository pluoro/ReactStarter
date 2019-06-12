export default function(values) {
  const {usernameOrEmail} = values;
  const errors = {};
  if(!usernameOrEmail || (usernameOrEmail && !usernameOrEmail.trim()) ){
    errors['usernameOrEmail'] = "usernameOrEmailRequiredError";
  }
  return errors;
}
