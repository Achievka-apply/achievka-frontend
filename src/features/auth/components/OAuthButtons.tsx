// src/features/auth/components/OAuthButtons.tsx

import { useGoogleLogin, type CodeResponse } from "@react-oauth/google";
import { googleOAuthRequest } from "../auth.api";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../user/user.api";
import { setUserProfile } from "../../user/user.store";
import { useAppDispatch } from "../../../store/hooks";

export default function OAuthButtons() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (response: CodeResponse) => {
      handleGoogleSuccess(response.code);
    },
    onError: () => console.error('Google Login Failed'),
  });

  const handleGoogleSuccess = async (code: string) => {
 
    const data = await googleOAuthRequest({code});
    
    if (!data) {
      console.error("API не вернул тело ответа");
      return;
    }

    const { key } = data;

    localStorage.setItem("access_token", key);

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
            <button onClick={() => login()} type="submit" className="btn btn-primary mb-1">Google</button>
            <button type="submit" className="btn btn-primary mb-1">Microsoft</button>
            <button type="submit" className="btn btn-primary mb-1">Apple</button>
            <button type="submit" className="btn btn-primary mb-1">Facebook</button>
        </div>
    </div>
  );
}
