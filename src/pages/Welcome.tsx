// src/pages/Welcome.tsx

import { useNavigate } from "react-router-dom"

export default function Welcome() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/join');
    }

    return (
        <div className="d-flex justify-content-center align-items-center flex-column vh-100">
            <h1>WELCOME!</h1>
            <button type="button" className="btn btn-primary" onClick={handleContinue}>Join us</button>
        </div>
    )
}
