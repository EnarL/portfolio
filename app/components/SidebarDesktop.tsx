import React from "react";
import TabButton, { type Tab } from "./TabButton";

interface SidebarDesktopProps {
    activeTab: Tab;
    onClick: (tab: Tab, e: React.MouseEvent<HTMLButtonElement>) => void;
    tabs: Tab[];
}

const SidebarDesktop = ({ activeTab, onClick, tabs }: SidebarDesktopProps) => (
    <nav className="hidden md:flex fixed top-0 left-0 h-full w-48 bg-gray-900 border-r border-gray-800 flex-col space-y-4 p-4 z-20">
        {tabs.map((tab) => (
            <TabButton key={tab} tab={tab} isActive={activeTab === tab} onClick={onClick} />
        ))}
    </nav>
);

export default SidebarDesktop;
