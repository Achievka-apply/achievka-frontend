// src/features/auth/pages/JoinPage.tsx

import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";
import Form from "../components/Form";
import OAuthButtons from "../components/OAuthButtons";
import Input from "../../../components/Input";
import WelcomeBlock from "../components/WelcomeBlock";
import { isValidEmail } from "../../../utils/validators/emailValidator";

export default function JoinPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleContinue(e: React.FormEvent) {
        e.preventDefault();
        setError(null);

        if (!isValidEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }

        if(!email) {
            navigate("/register");
            return;
        }

        setLoading(false);
        navigate(`/register?email=${encodeURIComponent(email)}`);
    }

    return (
        <div className="row">
            {/* Left Side */}
            <div className="col-md-6 d-flex flex-column justify-content-center text-white p-5" style={{ backgroundColor: '#111' }}>
                <WelcomeBlock />
            </div>
            {/* Right Side */}
            <div className="col">
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <Form
                        title='Sign up'
                        footer={
                            <>
                                By continuing, you agree to the <Link to="#privacy-policy" className="text-blue-600">Privacy Policy</Link>
                                <hr />
                                <OAuthButtons />
                            </>
                        }
                    >
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(null); }}
                            hasError={!!error}
                        />
                        {error && (
                            <p className="text-danger">{error}</p>
                        )}
                        <button type="submit" className="btn btn-primary" disabled={loading} onClick={handleContinue}>
                            {loading ? "Checking…" : "Continue"}
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
