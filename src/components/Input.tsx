// src/components/Input.tsx

import { InputProps } from "./types";

export default function Input({ type, placeholder, required=false } : InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-2 border rounded-md"
            required={required}
        />
    );
  }
  