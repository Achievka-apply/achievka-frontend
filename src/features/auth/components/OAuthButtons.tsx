// src/features/auth/components/OAuthButtons.tsx

export default function OAuthButtons() {
  return (
    <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl space-y-6">
        <div className="d-flex flex-column">
            <button type="submit" className="btn btn-primary mb-1">Google</button>
            <button type="submit" className="btn btn-primary mb-1">Microsoft</button>
            <button type="submit" className="btn btn-primary mb-1">Apple</button>
            <button type="submit" className="btn btn-primary mb-1">Facebook</button>
        </div>
    </div>
  );
}
