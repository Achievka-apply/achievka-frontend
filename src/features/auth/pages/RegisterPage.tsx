// src/features/auth/pages/RegisterPage.tsx

import { useNavigate, useSearchParams } from "react-router-dom"
import Form from "../components/Form";
import { Link } from "react-router-dom";
import OAuthButtons from "../components/OAuthButtons";
import PasswordRequirements from "../components/PasswordRequirements";
import Input from "../../../components/Input";
import { isValidEmail } from "../../../utils/validators/emailValidator";
import { useEffect, useState } from "react";
import { isValidPassword } from "../../../utils/validators/passwordValidator";
import { registerRequest } from "../auth.api";
import PasswordRepeat from "../components/PasswordRepeat";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [emailError, setEmailError] = useState<React.ReactNode | null>(null);
    const passwordOK = isValidPassword(password);
    const passwordRepeat = (password === password2);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const emailFromURL = searchParams.get("email");
        if (emailFromURL) {
            setEmail(emailFromURL);
        }
    }, [searchParams]);

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();
        setEmailError(null);

        if (!isValidEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }

        if (!passwordOK) {
            return;
        }

        setLoading(true);
        try {
           /* const registered = await checkEmailRegistered(email);
            if (registered) {
                setEmailError(
                    <>
                        This email is already registered.
                        Please {<Link to="/login" className="text-blue-600">Log in</Link>} or try another email.
                    </>
                );
                return;
            }*/

            const data = await registerRequest({email, password, password2});
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
                title='Create Your Account'
                footer={
                    <>
                        <div className="d-flex">Alreday have an account? <Link to="/login" className="text-blue-600">Log in</Link></div>
                        <hr />
                        <OAuthButtons />
                    </>
                }
            >
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setEmailError(null); }}
                    hasError={!!emailError}
                />
                {emailError && (
                    <p className="text-danger">
                        {emailError}
                    </p>
                )}
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    hasError={!passwordOK && password.length > 0}
                />
                <Input
                    type="password"
                    placeholder="Repeat password"
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                    hasError={!passwordRepeat && password2.length > 0}
                />
                {/* Show that passwords are not equal */}
                {!passwordRepeat && password2.length > 0 && (
                    <PasswordRepeat />
                )}
                {/* Show detailed requirements when invalid */}
                {!passwordOK && password.length > 0 && (
                    <PasswordRequirements />
                )}
                <button type="submit" className="btn btn-primary" disabled={loading} onClick={handleRegister}>
                    {loading ? "Signing up…" : "Sign up"}
                </button>
            </Form>
        </div>
    )
}
