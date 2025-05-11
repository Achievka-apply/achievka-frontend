// src/features/auth/pages/ForgotPasswordPage.tsx

import Form from "../components/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Input from "../../../components/Input";
import { isValidEmail } from "../../../utils/validators/emailValidator";
import { useState } from "react";
import { passwordResetRequest } from "../auth.api";

export default function ForgotPasswordPage() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState<React.ReactNode | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleForgotPassword(e: React.FormEvent) {
        e.preventDefault();
        setEmailError(null);
    
        if (!isValidEmail(email)) {
          setEmailError("Please enter a valid email address");
          return;
        }
    
        setLoading(true);
        try {
            await passwordResetRequest({email});
            toast.success("Check your inbox for the reset link");
        } catch {
            toast.error("Failed to send reset link, please try again");
        } finally {
            setLoading(false);
        }
      }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Forgot password'
                subtitle='Enter your email address and we will send you instructions to reset your password.'
                footer={
                    <>
                        <Link to="/login" className="text-blue-600">Back to Login</Link>
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
                    <p className="text-danger">{emailError}</p>
                )}
                <button type="submit" className="btn btn-primary" disabled={loading} onClick={handleForgotPassword}>
                    {loading ? "Sending…" : "Send"}
                </button>
            </Form>
        </div>
    )
}
