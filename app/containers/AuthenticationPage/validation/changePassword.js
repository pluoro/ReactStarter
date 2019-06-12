export default function(values) {
  const {password, passwordConfirm} = values;
  const errors = {};
  if(!password || (password && !password.trim()) ){
    errors['password'] = "passwordRequiredError";
  }
  if(!passwordConfirm || (passwordConfirm && !passwordConfirm.trim()) ){
    errors['passwordConfirm'] = "passwordRequiredError";
  }
  if(passwordConfirm && passwordConfirm.trim() && password && password.trim()){
    if(password.trim() !== passwordConfirm.trim()){
      errors['passwordConfirm'] = "passwordConfirmError";
    }
  }
  return errors;
}
