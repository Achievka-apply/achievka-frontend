import { useState } from 'react';
import LowerTabs from '../components/LowerTabs';
import UpperTabs from '../components/UpperTabs';

export default function Dashboard() {

    const [activeUpperTab, setActiveUpperTab] = useState<"general" | "activity" | "favorites">("general");
    const [activeLowerTab, setActiveLowerTab] = useState<"documents" | "progress">("documents");
    const [activeLowerSubTab, setActiveLowerSubTab] = useState<"resumes" | "cover-letters">("resumes");

    return (
        <div className="container vh-100">
            <div className="row h-50">
                <div className="col border">
                    <UpperTabs
                        activeTab={activeUpperTab}
                        setActiveTab={setActiveUpperTab}
                    />
                </div>
            </div>
            <div className="row h-50">
                <div className="col border">
                    <LowerTabs
                        activeTab={activeLowerTab}
                        setActiveTab={setActiveLowerTab}
                        activeSubTab={activeLowerSubTab}
                        setActiveSubTab={setActiveLowerSubTab}
                    />
                </div>
            </div>
        </div>
    );
}
