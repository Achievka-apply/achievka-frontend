// src/features/auth/components/PasswordRequirements.tsx

export default function PasswordRequirements() {
    return (
        <>
            You password must contain<br />
            <ul>
                <li>At least 12 characters</li>
                <li>Lower case letters (a-z)</li>
                <li>Upper case letters (A-Z)</li>
                <li>Numbers (0-9)</li>
            </ul>
        </>
    );
  }
  