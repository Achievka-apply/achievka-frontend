import { DashboardLowerTabsProps } from "../dashboard.types";
import Documents from "../pages/tabs/Documents";
import Progress from "../pages/tabs/Progress";

export default function LowerTabs({activeTab, setActiveTab, activeSubTab, setActiveSubTab} : DashboardLowerTabsProps) {

  return (
    <>
      {/* LowerTabs */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={() => setActiveTab("documents")}>Documents</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setActiveTab("progress")}>Progress</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* LowerContent */}
      <div>
        {activeTab === "documents" && <div>
          <Documents
            activeSubTab={activeSubTab}
            setActiveSubTab={setActiveSubTab}
          />
        </div>}
        {activeTab === "progress" && <div><Progress /></div>}
      </div>
    </>
  );
}
