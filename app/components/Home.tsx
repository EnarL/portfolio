import React, { useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TabButton, tabs, type Tab } from "./Tabs";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import {Linkedin, Mail} from "lucide-react";

const containerVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

const Home = () => {
    const [activeTab, setActiveTab] = useState<Tab>("Projects");

    const handleTabClick = (tab: Tab, e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "Skills":
                return <Skills />;
            case "Projects":
                return <Projects />;
            case "Contact":
                return <Contact />;
            default:
                return null;
        }
    };

    return (
        <main className="bg-white text-gray-900 min-h-screen flex flex-col">
            <section
                className="relative h-[45vh] flex flex-col items-center justify-center bg-cover bg-center px-4 text-center"
                style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')" }}
                aria-label="Hero Section"
            >
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
                <div className="relative z-10 max-w-xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">Enar Leini</h1>
                    <p className="text-lg text-gray-700 mt-1 italic">Full Stack Developer</p>

                    <p className="text-gray-700 text-lg mt-6">
                        Freshly graduated Computer Science student open for work in following departments:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-lg mt-2 space-y-1">
                        <li>Full-stack developer</li>
                        <li>Back-end developer</li>
                        <li>Front-end developer</li>
                    </ul>

                    <div className="flex justify-center gap-6 mt-4 text-gray-700">
                        <a
                            href="https://github.com/EnarL"
                            aria-label="GitHub Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="none"
                                className="w-6 h-6"
                            >
                                <path
                                    d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.933 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.513 11.513 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.63-5.48 5.922.43.37.823 1.102.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.217.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a
                            href="mailto:enar.leini00@gmail.com"
                            aria-label="Send Email"
                            className="text-green-700 hover:text-green-900"
                        >
                            <Mail className="w-6 h-6"/>
                        </a>

                        <a
                            href="https://linkedin.com/in/enar-leini"
                            aria-label="LinkedIn Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900"
                        >
                            <Linkedin className="w-6 h-6"/>
                        </a>

                    </div>
                </div>
            </section>

            <nav className="py-3 bg-white border-t border-gray-300" role="tablist" aria-label="Portfolio Sections">
                <div className="flex justify-center flex-wrap gap-4 mb-6">
                    {tabs.map((tab) => (
                        <TabButton key={tab} tab={tab} isActive={activeTab === tab} onClick={handleTabClick}/>
                    ))}
                </div>

                <AnimatePresence mode="wait" initial={false}>
                    <motion.section
                        key={activeTab}
                        id={`tabpanel-${activeTab}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${activeTab}`}
                        className="px-4 pb-24"
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        {renderTabContent()}
                    </motion.section>
                </AnimatePresence>
            </nav>
        </main>
    );
};

export default Home;
