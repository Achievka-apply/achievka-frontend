// src/features/auth/pages/JoinPage.tsx

import { useNavigate } from "react-router-dom"
import Form from "../components/Form";
import { Link } from "react-router-dom";
import OAuthButtons from "../components/OAuthButtons";
import Input from "../../../components/Input";
import WelcomeBlock from "../components/WelcomeBlock";
import { isValidEmail } from "../../../utils/validators/emailValidator";

export default function JoinPage() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/register');
    }

    return (
        <div className="row">
            {/* Left Side */}
            <div className="col-md-6 d-flex flex-column justify-content-center text-white p-5" style={{ backgroundColor: '#111' }}>
                <WelcomeBlock />
            </div>
            {/* Right Side */}
            <div className="col">
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <Form
                        title='Sign up'
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
                            validator={isValidEmail}
                            errorMessage="Please enter a valid email address"
                        />
                        <button type="submit" className="btn btn-primary" onClick={handleContinue}>Continue</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
