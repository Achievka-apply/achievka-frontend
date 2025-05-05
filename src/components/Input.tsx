// src/components/Input.tsx

import { useState, FocusEvent } from 'react';
import { InputProps } from "./types";

export default function Input({
    type,
    placeholder,
    required = false,
    validator,
    errorMessage = 'Invalid value',
    className = '',
    onBlur,
    ...rest
} : InputProps) {
    const [error, setError] = useState<string | null>(null);

    function handleBlur(e: FocusEvent<HTMLInputElement>) {
        onBlur?.(e);
        if (validator) {
            const ok = validator(e.target.value);
            setError(ok ? null : errorMessage);
        }
    }

    return (
        <>
            <input
                {...rest}
                type={type}
                placeholder={placeholder}
                required={required}
                onBlur={handleBlur}
                className={
                    `w-full px-4 py-2 rounded-md border` +
                    (error ? ' border-danger' : ' border-light-subtle') +
                    ` ${className}`
                }
            />
            {error && (
                <p className="text-danger">{error}</p>
            )}
        </>
    );
  }
  