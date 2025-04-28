// src/features/auth/pages/ForgotPassword.tsx

import { useNavigate } from "react-router-dom"
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Input from "../../../components/Input";

export default function ForgotPassword() {

    const navigate = useNavigate();

    const handleContinue = () => {
        toast.success("Code has been sent!");
        navigate('/confirm-reset-password');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Achievka'
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
                    required
                />
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Send</button>
            </Form>
        </div>
    )
}
