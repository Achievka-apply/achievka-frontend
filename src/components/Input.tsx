// src/components/Input.tsx

import { InputProps } from "../types/types";

export default function Input({
    type,
    placeholder,
    required = false,
    className = '',
    hasError = false,
    ...rest
} : InputProps) {

    return (
        <>
            <input
                {...rest}
                type={type}
                placeholder={placeholder}
                required={required}
                className={`
                    w-full px-4 py-2 rounded-md border
                    ${hasError ? "border-danger" : "border-light-subtle"} 
                    ${className}
                `}
            />
        </>
    );
  }
  