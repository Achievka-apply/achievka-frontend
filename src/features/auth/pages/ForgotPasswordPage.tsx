// src/features/auth/pages/ForgotPasswordPage.tsx

import { useNavigate } from "react-router-dom"
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Input from "../../../components/Input";
import { isValidEmail } from "../../../utils/validators/emailValidator";

export default function ForgotPasswordPage() {

    const navigate = useNavigate();

    const handleContinue = () => {
        toast.success("Code has been sent!");
        navigate('/confirm-reset-password');
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
                    required
                    validator={isValidEmail}
                    errorMessage="Please enter a valid email address"
                />
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Send</button>
            </Form>
        </div>
    )
}
