// src/features/auth/pages/ResetPassword.tsx

import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import PasswordRequirements from "../components/PasswordRequirements";

export default function ResetPassword() {
    const navigate = useNavigate();

    const handleContinue = () => {
        toast.success("The password has been reset!");
        navigate('/login');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Achievka'
                subtitle='Enter new password to reset.'
                footer={
                    <>
                        <Link to="/login" className="text-blue-600">Back to Login</Link>
                    </>
                }
            >
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                />
                <input
                    type="password"
                    placeholder="Repeat password"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                />
                <PasswordRequirements />
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Reset</button>
            </Form>
        </div>
    )
}
