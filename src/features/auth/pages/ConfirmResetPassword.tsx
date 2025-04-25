// src/features/auth/pages/ConfirmResetPassword.tsx

import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function ConfirmResetPassword() {
    const navigate = useNavigate();

    const handleContinue = () => {
        toast.success("The code has been confirmed!");
        navigate('/reset-password');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Achievka'
                subtitle='Enter your code from email to reset your password.'
                footer={
                    <>
                        <Link to="/login" className="text-blue-600">Back to Login</Link>
                    </>
                }
            >
                <input
                    type="code"
                    placeholder="Confirmation code"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                />
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Confirm</button>
            </Form>
        </div>
    )
}
