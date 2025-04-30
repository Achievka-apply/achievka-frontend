import Resumes from "../../../user/pages/Resumes";
import CoverLetters from "../../../user/pages/CoverLetters";
import { LowerSubTabsProps } from "../../dashboard.types";

export default function Documents({activeSubTab, setActiveSubTab} : LowerSubTabsProps) {
    
    return (
        <>
            {/* LowerSubTabs */}
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={() => setActiveSubTab("resumes")}>Resumes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => setActiveSubTab("cover-letters")}>Cover Letters</a>
                        </li>
                    </ul>
                </div>
            </nav>
    
            {/* LowerSubContents */}
            <div>
                {activeSubTab === "resumes" && <div><Resumes /></div>}
                {activeSubTab === "cover-letters" && <div><CoverLetters /></div>}
            </div>
        </>
    );
};
  