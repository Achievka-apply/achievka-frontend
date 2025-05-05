import { useNavigate } from "react-router-dom";

export default function NotFound() {
    
    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/app');
    }

    return (
        <>
            <h1>ERROR: 404</h1>
            <h2 className="text-muted">Page Not Found</h2>
            <button type="submit" className="btn btn-primary" onClick={handleReturnHome}>Return home</button>
        </>
    )
}
