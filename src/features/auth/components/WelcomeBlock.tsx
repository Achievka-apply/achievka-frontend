import Logo from "../../../components/Logo";

export default function WelcomeBlock() {
    return (
        <>
            <Logo />
            <h1>Your future starts here.</h1>
            <h5 className="text-muted mt-2">FOR students, BY students</h5>
            
            <div className="mt-auto">
                <p className="mb-1">© 2025 Achievka Systems. All Rights Reserved.</p>
                <div>
                <a href="#" className="me-3 text-white text-decoration-none">LinkedIn</a>
                <a href="#" className="me-3 text-white text-decoration-none">GitHub</a>
                <a href="#" className="text-white text-decoration-none">Support</a>
                </div>
            </div>
        </>
    )
}