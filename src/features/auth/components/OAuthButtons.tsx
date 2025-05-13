// src/features/auth/components/OAuthButtons.tsx

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { googleOAuthRequest } from "../auth.api";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../user/user.api";
import { setUserProfile } from "../../user/user.store";
import { useAppDispatch } from "../../../store/hooks";

export default function OAuthButtons() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
 
    const data = await googleOAuthRequest({code: credentialResponse.credential});
    
    if (!data) {
      console.error("API не вернул тело ответа");
      return;
    }

    const { access } = data;

    localStorage.setItem("access_token", access);

    try {
      const profile = await fetchUserProfile();
      dispatch(setUserProfile(profile));
    } catch {
      console.error("Failed downloading user data.")
    }

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
