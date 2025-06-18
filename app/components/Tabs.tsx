import React, {type MouseEvent } from "react";

export const tabs = ["Projects", "Skills", "Contact"] as const;
export type Tab = typeof tabs[number];

interface TabButtonProps {
    tab: Tab;
    isActive: boolean;
    onClick: (tab: Tab, e: MouseEvent<HTMLButtonElement>) => void;
}

export const TabButton: React.FC<TabButtonProps> = ({ tab, isActive, onClick }) => (
    <button
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${tab}`}
        id={`tab-${tab}`}
        onClick={(e) => onClick(tab, e)}
        className={`px-5 py-2 rounded-full text-sm font-semibold border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isActive
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
        }`}
    >
        {tab}
    </button>
);
