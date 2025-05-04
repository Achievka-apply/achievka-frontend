// src/features/auth/pages/ResetPasswordPage.tsx

import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import PasswordRequirements from "../components/PasswordRequirements";
import Input from "../../../components/Input";

export default function ResetPasswordPage() {
    const navigate = useNavigate();

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
                    required
                />
                <Input
                    type="password"
                    placeholder="Repeat password"
                    required
                />
                <PasswordRequirements />
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Reset</button>
            </Form>
        </div>
    )
}
