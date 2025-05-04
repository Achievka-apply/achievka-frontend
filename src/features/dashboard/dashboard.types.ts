
export interface TabsProps<T extends string> {
    activeTab: T;
    setActiveTab: (tab: T) => void;
}

export interface SubTabsProps<T extends string> {
    activeSubTab: T;
    setActiveSubTab: (subTab: T) => void;
}

export type DashboardUpperTabsProps = TabsProps<'general' | 'activity' | 'favorites'>;

export type LowerTabsProps = TabsProps<'documents' | 'progress'>;

export type LowerSubTabsProps = SubTabsProps<'resumes' | 'cover-letters'>;

export type DashboardLowerTabsProps = LowerTabsProps & LowerSubTabsProps;

export interface SurveyAnswers {
    name: string;
    heardFrom: string;
    heardFromOther: string;
    school: string | null;
    usedService: 'agency' | 'tools' | 'none' | null;
    usedServiceDetails: string;
    readiness: string;
    helpWith: string[];
}