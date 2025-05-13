import { useNavigate } from "react-router-dom";
import gear from "../../assets/gear.svg";
import { logoutRequest } from "../../features/auth/auth.api";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearUserProfile } from "../../features/user/user.store";

export default function TopHeader() {
  const user = useAppSelector(state => state.user.userProfile);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 

    setLoading(true);
    try {
        await logoutRequest();
        localStorage.removeItem("access_token");
        dispatch(clearUserProfile())
        navigate("/login")
    } catch(error) {
        throw new Error("Logout error: "+error);
    } finally {
        setLoading(false);
    }
  }

  return (
    <header>
      <div className="d-flex flex-end">
        {/* Upgrade Button */}
        <button onClick={() => navigate("/pricing")}>
          Upgrade Now
        </button>

        {/* Settings Dropdown Menu */}
        <div className="dropdown">
          <img className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src={gear} />
          <ul className="dropdown-menu">
            <div className="dropdown-item-text">
              <button>
                {/* Avatar / Initial */}
                {user ? user.first_name : 'U'}
              </button>
              <p>{user ? user.first_name+user.last_name : 'Name'}</p>
              <p>{user ? user.email : 'email@example.com'}</p>  
            </div>
            <hr />
            <li><a className="dropdown-item" href="/app/settings">Account settings</a></li>
            <li><a className="dropdown-item" href="/app/faq">FAQ</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleLogout}>{loading ? "Logging out…" : "Log out"}</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
