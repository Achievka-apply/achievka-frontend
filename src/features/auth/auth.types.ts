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

export interface AuthResponse {
  access: string;
}

export interface OAuthCredentials {
  provider: string,
  client_id: string,
  client_secret: string,
  token: string;
}
