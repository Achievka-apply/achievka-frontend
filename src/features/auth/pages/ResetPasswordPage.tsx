// src/features/auth/pages/ResetPasswordPage.tsx

import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import PasswordRequirements from "../components/PasswordRequirements";
import Input from "../../../components/Input";
import { useState } from "react";
import { isValidPassword } from "../../../utils/validators/passwordValidator";
import PasswordRepeat from "../components/PasswordRepeat";

export default function ResetPasswordPage() {
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const passwordOK = isValidPassword(password);
    const passwordRepeat = (password === repeatedPassword);

    const handleContinue = () => {
        toast.success("The password has been reset!");
        navigate('/login');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Create new password'
                subtitle='Enter new password to reset.'
                footer={
                    <>
                        <Link to="/login" className="text-blue-600">Back to Login</Link>
                    </>
                }
            >
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
                    value={repeatedPassword}
                    onChange={e => setRepeatedPassword(e.target.value)}
                    hasError={!passwordRepeat && repeatedPassword.length > 0}
                />
                {/* Show that passwords are not equal */}
                {!passwordRepeat && repeatedPassword.length > 0 && (
                    <PasswordRepeat />
                )}
                {/* Show detailed requirements when invalid */}
                {!passwordOK && password.length > 0 && (
                    <div className="">
                        <PasswordRequirements />
                    </div>
                )}
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Reset</button>
            </Form>
        </div>
    )
}
