// src/features/auth/pages/ConfirmResetPage.tsx

import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Input from "../../../components/Input";
import { useState } from "react";

export default function ConfirmResetPage() {
    const navigate = useNavigate();

    const [code, setCode] = useState<string>('');

    const handleContinue = () => {
        toast.success("The code has been confirmed!");
        navigate('/reset-password');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Confirm'
                subtitle='Enter your code from email to reset your password.'
                footer={
                    <>
                        <Link to="/login" className="text-blue-600">Back to Login</Link>
                    </>
                }
            >
                <Input
                    type="code"
                    placeholder="Confirmation code"
                    value={code}
                    onChange={e => {setCode(e.target.value)}}
                />
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Confirm</button>
            </Form>
        </div>
    )
}
