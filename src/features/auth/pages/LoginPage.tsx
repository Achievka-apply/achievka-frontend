// src/features/auth/pages/LoginPage.tsx

import { useNavigate, Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Form from "../components/Form";
import OAuthButtons from "../components/OAuthButtons";
import Input from "../../../components/Input";
import { isValidEmail } from "../../../utils/validators/emailValidator";
import { loginRequest } from "../auth.api";

export default function LoginPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams('');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState<React.ReactNode | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const emailFromURL = searchParams.get("email");
        if (emailFromURL) {
            setEmail(emailFromURL);
        }
    }, [searchParams]);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setEmailError(null);

        if (!isValidEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        setLoading(true);
        try {
            /* const registered = await checkEmailRegistered(email);
            if (!registered) {
                setEmailError(
                    <>
                        This email is not registered.
                        Please {<Link to="/register" className="text-blue-600">Sign up</Link>} or try another email
                    </>
                );
                return;
            } */
            
            const data = await loginRequest({email, password});
            const { access, refresh } = data;

            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);

            navigate("/app")
        } catch {
            setEmailError("Something went wrong, please try again");
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Log in'
                footer={
                    <>
                        <div className="d-flex">Don't have an account? <Link to="/register" className="text-blue-600">Sign up</Link></div>
                        <hr />
                        <OAuthButtons />
                    </>
                }
            >
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(null); }}
                    className={emailError ? ' border-danger' : ' border-light-subtle'}
                />
                {emailError && (
                    <p className="text-danger">{emailError}</p>
                )}
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="d-flex"><Link to="/forgot-password" className="text-blue-600">Forgot password?</Link></div>
                <button type="submit" className="btn btn-primary" disabled={loading} onClick={handleLogin}>
                    {loading ? "Logging in…" : "Log in"}
                </button>
            </Form>
        </div>
    )
}
