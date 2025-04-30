// src/features/auth/pages/Login.tsx

import { useNavigate } from "react-router-dom"
import Form from "../components/Form";
import { Link } from "react-router-dom";
import OAuthButtons from "../components/OAuthButtons";
import Input from "../../../components/Input";

export default function Login() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/app');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Achievka'
                footer={
                    <>
                        <div className="d-flex">Don't have an account? <Link to="/register" className="text-blue-600">Sign up</Link></div>
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
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                />
                <div className="d-flex"><Link to="/forgot-password" className="text-blue-600">Forgot password?</Link></div>
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Log in</button>
            </Form>
        </div>
    )
}
