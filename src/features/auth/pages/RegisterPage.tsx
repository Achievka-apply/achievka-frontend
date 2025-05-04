// src/features/auth/pages/RegisterPage.tsx

import { useNavigate } from "react-router-dom"
import Form from "../components/Form";
import { Link } from "react-router-dom";
import OAuthButtons from "../components/OAuthButtons";
import PasswordRequirements from "../components/PasswordRequirements";
import Input from "../../../components/Input";

export default function RegisterPage() {
    const navigate = useNavigate();

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
                />
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
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Sign up</button>
            </Form>
        </div>
    )
}
