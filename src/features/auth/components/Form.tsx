// src/features/auth/components/Form.tsx

import { FormProps } from "../auth.types";

export default function Form({
  title,
  subtitle,
  children,
  footer,
  ...rest
}: FormProps) {
  return (
    <div className="w-15 max-w-md p-8 bg-white shadow-md rounded-xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>

      <form
        {...rest}
        className="d-flex flex-column space-y-4"
      >
        {children}
      </form>

      {footer && (
        <div className="d-flex flex-column text-sm text-center text-gray-600">
          {footer}
        </div>
      )}
    </div>
  );
}
