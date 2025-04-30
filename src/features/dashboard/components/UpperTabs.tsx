import General from "../pages/tabs/General";
import Activity from "../pages/tabs/Activity";
import Favorites from "../pages/tabs/Favorites";
import { DashboardUpperTabsProps } from "../dashboard.types";

export default function UpperTabs({activeTab, setActiveTab} : DashboardUpperTabsProps) {

  return (
    <>
      {/* UpperTabs */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={() => setActiveTab("general")}>General</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setActiveTab("activity")}>Activity</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setActiveTab("favorites")}>Favorites</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* UpperContent */}
      <div>
        {activeTab === "general" && <div><General /></div>}
        {activeTab === "activity" && <div><Activity /></div>}
        {activeTab === "favorites" && <div><Favorites /></div>}
      </div>
    </>
  );
}
