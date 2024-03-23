function emailValidator(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function passwordValidator(password: string): boolean {
  return password.length >= 6;
}

export { emailValidator, passwordValidator };