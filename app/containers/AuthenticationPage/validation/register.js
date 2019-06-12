export default function(values) {
  const {name, username, email, password} = values;
  const errors = {};
  if(!name || (name && !name.trim()) ){
    errors['name'] = "nameRequiredError";
  }
  if(!password || (password && !password.trim())){
    errors['password'] = "passwordRequiredError";
  }
  if(!username || (username && !username.trim())){
    errors['username'] = "usernameRequiredError";
  }
  if(!email || (email && !email.trim())){
    errors['email'] = "emailRequiredError";
  }
  // additional check for email format with same regex as backend

  return errors;
}
