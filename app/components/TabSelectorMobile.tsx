import React from "react";
import type { Tab } from "./TabButton";

interface TabSelectorMobileProps {
    activeTab: Tab;
    onChange: (tab: Tab, e: React.ChangeEvent<HTMLSelectElement>) => void;
    tabs: Tab[];
}

const TabSelectorMobile = ({ activeTab, onChange, tabs }: TabSelectorMobileProps) => (
    <div className="md:hidden fixed top-0 left-0 w-full z-40 bg-gray-900/95 backdrop-blur border-b border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3">
            <select
                value={activeTab}
                onChange={(e) => onChange(e.target.value as Tab, e)}
                className="w-full bg-gray-800 text-white rounded-md py-2 px-3"
            >
                {tabs.map((tab) => (
                    <option key={tab} value={tab}>
                        {tab}
                    </option>
                ))}
            </select>
        </div>
    </div>
);

export default TabSelectorMobile;
