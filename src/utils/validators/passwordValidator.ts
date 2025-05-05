// src/utils/validators/passwordValidator.ts

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/;

export function isValidPassword(value: string): boolean {
    return PASSWORD_REGEX.test(value);
}