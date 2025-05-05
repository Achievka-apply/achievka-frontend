// src/features/auth/pages/RegisterPage.tsx

import { useNavigate } from "react-router-dom"
import Form from "../components/Form";
import { Link } from "react-router-dom";
import OAuthButtons from "../components/OAuthButtons";
import PasswordRequirements from "../components/PasswordRequirements";
import Input from "../../../components/Input";
import { isValidEmail } from "../../../utils/validators/emailValidator";
import { useState } from "react";
import { isValidPassword } from "../../../utils/validators/passwordValidator";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passwordOK = isValidPassword(password);

    const handleContinue = () => {
        navigate('/survey');
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
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    validator={isValidEmail}
                    errorMessage="Please enter a valid email address"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    validator={isValidPassword}
                />
                <Input
                    type="password"
                    placeholder="Repeat password"
                    required
                />
                {/* Show detailed requirements when invalid */}
                {!passwordOK && password.length > 0 && (
                    <div className="">
                        <PasswordRequirements />
                    </div>
                )}
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Sign up</button>
            </Form>
        </div>
    )
}
