// src/features/auth/components/OAuthButtons.tsx

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { oAuthRequest } from "../auth.api";
import { useNavigate } from "react-router-dom";

export default function OAuthButtons() {
  const navigate = useNavigate(); 

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
 
    const data = await oAuthRequest(credentialResponse);
    
    if (!data) {
      console.error("API не вернул тело ответа");
      return;
    }

    const { access, refresh } = data;

    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);

    navigate('/app');
  };

  return (
    <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl space-y-6">
        <div className="d-flex flex-column">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => console.error("Google Login Failed")}
            />
            <button type="submit" className="btn btn-primary mb-1">Microsoft</button>
            <button type="submit" className="btn btn-primary mb-1">Apple</button>
            <button type="submit" className="btn btn-primary mb-1">Facebook</button>
        </div>
    </div>
  );
}
