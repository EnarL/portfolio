import React from "react";
import TabButton, { type Tab } from "./TabButton";

interface TabBarDesktopProps {
    activeTab: Tab;
    onClick: (tab: Tab, e: React.MouseEvent<HTMLButtonElement>) => void;
    tabs: Tab[];
}

const TabBarDesktop = ({ activeTab, onClick, tabs }: TabBarDesktopProps) => (
    <header
        className="hidden md:block fixed top-0 left-0 w-full z-30 bg-gray-900/95 backdrop-blur border-b border-gray-800 shadow-md"
        style={{ height: 64 }}
    >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center space-x-6">
            {tabs.map((tab) => (
                <TabButton key={tab} tab={tab} isActive={activeTab === tab} onClick={onClick} />
            ))}
        </div>
    </header>
);

export default TabBarDesktop;
