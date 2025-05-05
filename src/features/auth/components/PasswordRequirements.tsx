// src/features/auth/components/PasswordRequirements.tsx

export default function PasswordRequirements() {
    return (
        <div className="d-flex px-4 pt-2 justofy-content-center flex-column border border-light-subtle">
            You password must contain<br />
            <ul>
                <li>At least 12 characters</li>
                <li>Lower case letters (a-z)</li>
                <li>Upper case letters (A-Z)</li>
                <li>Numbers (0-9)</li>
            </ul>
        </div>
    );
  }
  