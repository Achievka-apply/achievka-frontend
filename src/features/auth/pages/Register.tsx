// src/features/auth/pages/Register.tsx

import { useNavigate } from "react-router-dom"
import Form from "../components/Form";
import { Link } from "react-router-dom";
import OAuthButtons from "../components/OAuthButtons";
import PasswordRequirements from "../components/PasswordRequirements";

export default function Register() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/survey');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Achievka'
                footer={
                    <>
                        <div className="d-flex">Alreday have an account? <Link to="/login" className="text-blue-600">Log in</Link></div>
                        <hr />
                        <OAuthButtons />
                    </>
                }
            >
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                />
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
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Sign up</button>
            </Form>
        </div>
    )
}
