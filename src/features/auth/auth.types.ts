// src/features/auth/auth.types.ts

import { ReactNode } from "react";

export interface FormProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}