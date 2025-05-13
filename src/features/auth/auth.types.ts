// src/features/auth/auth.types.ts

import { ReactNode } from "react";

export interface FormProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  password2: string;
}

export interface GoogleOAuthCredentials {
  code?: string;
}

export interface AuthResponse {
  access: string;
}

export interface PasswordResetBody {
  email: string
}

export interface PasswordResetConfirmBody {
  uid: string;
  token: string;
  new_password1: string;
  new_password2: string;
}