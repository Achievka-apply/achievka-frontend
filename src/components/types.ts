// src/components/types.ts

import { InputHTMLAttributes } from "react";

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    type: string,
    placeholder: string,
    required?: boolean,
    validator?: (value: string) => boolean;
    errorMessage?: string;
}