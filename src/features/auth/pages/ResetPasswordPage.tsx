// src/features/auth/pages/ResetPasswordPage.tsx

import { useNavigate, useSearchParams } from "react-router-dom";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import PasswordRequirements from "../components/PasswordRequirements";
import Input from "../../../components/Input";
import { useEffect, useState } from "react";
import { isValidPassword } from "../../../utils/validators/passwordValidator";
import PasswordRepeat from "../components/PasswordRepeat";
import { passwordResetConfirmRequest } from "../auth.api";

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams('');

    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const passwordOK = isValidPassword(password);
    const passwordRepeat = (password === repeatedPassword);

    const [uid, setUid] = useState<string>('');
    const [token, setToken] = useState<string>('');

    useEffect(() => {
        const uid = searchParams.get("uid");
        const token = searchParams.get("token");

        if (uid) {
            setUid(uid);
        }
        if (token) {
            setToken(token);
        }

    }, [searchParams]);

    const handleReset = async () => {
        try {
            await passwordResetConfirmRequest({uid, token, new_password1: password, new_password2: repeatedPassword});
            toast.success("The password has been reset!");
            navigate('/login');
        } catch {
            toast.error("Failed to reset password, please try again")
        }
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
                <button type="submit" className="btn btn-primary" onClick={handleReset}>Reset</button>
            </Form>
        </div>
    )
}
