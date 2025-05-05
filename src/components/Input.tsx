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
        <div className="mb-4">
            <input
                {...rest}
                type={type}
                placeholder={placeholder}
                required={required}
                onBlur={handleBlur}
                className={
                    `w-full px-4 py-2 border rounded-md ` +
                    (error ? 'border-red-500' : 'border-gray-300') +
                    ` ${className}`
                }
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
  }
  