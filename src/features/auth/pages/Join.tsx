// src/features/auth/pages/Join.tsx

import { useNavigate } from "react-router-dom"
import Form from "../components/Form";
import { Link } from "react-router-dom";
import OAuthButtons from "../components/OAuthButtons";
import Input from "../../../components/Input";

export default function Join() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/register');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form
                title='Achievka'
                footer={
                    <>
                        By continuing, you agree to the <Link to="#privacy-policy" className="text-blue-600">Privacy Policy</Link>
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
                <button type="submit" className="btn btn-primary" onClick={handleContinue}>Continue</button>
            </Form>
        </div>
    )
}
