
export const validateEmailPassword = (email, password) => {
  const checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(checkEmail == false) {
    return "Email is not valid";
  }

  if(checkPassword == false) {
    return "Password is not valid";
  }

  return null;
}
