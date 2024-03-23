
import { emailValidator, passwordValidator } from "./validation";


export function validateEmail(email: string): boolean {
  return emailValidator(email);
}

export function validatePassword(password: string): boolean {
  return passwordValidator(password);
}

