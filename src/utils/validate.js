const validate = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return "Email and Password are valid";
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  return isEmailValid;
};
export { validateEmail };



export default validate;

