import React, { useState } from "react";
import type { MouseEvent } from "react";

import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Star,
  ExternalLink,
} from "lucide-react";

const tabs = ["About", "Skills", "Projects", "Contact"] as const;
type Tab = typeof tabs[number];

const skills = {
  Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Javascript"],
  Backend: ["Java Spring Boot", "Node.js", "Express", "Python", "Django"],
};

const projects = [
  {
    title: "Carsale Platform",
    description: "Platform where users can add car listings and also search and filter already existing cars.",
    tech: ["Spring Boot", "Next.js", "MongoDB", "AWS S3", "Docker", "Heroku"],
    github: "https://github.com/EnarL/auto24",
    live: "https://carsale-frontend-f0016e72197f.herokuapp.com/"
  },
  {
      title: "Budgeting Application ",
      description: "Users can input their incomes and expenses and track them monthly",
      tech: ["Spring Boot", "Vue.js", "PostgreSQL"],
      github: "https://github.com/EnarL/financeapp"
  },
    {
        title: "CVMaker",
        description: "CVMaker allows everyone create their dream CV and download it in PDF format. To make the experience even smoother the program tracks changes made in CV real-time ",
        tech: ["Node.js", "Next.js", "Redis", "Docker"],
        github: "https://github.com/EnarL/CVMaker"
    },
    {
        title: "Waldur Report Generation App",
        description: "The project was made as a grop project during an university course ”Software Project”, where I was mainly\n" +
            "responsible for the backend side and leading the communication with the client (Waldur) ",
        tech: ["Django", "Next.js", "Docker", "Kubernetes"],
        github: "https://github.com/EnarL/report-generation-for-waldur-service-providers"
    },



];

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>("About");

  const handleTabClick = (tab: Tab, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveTab(tab);
    // Optionally: scroll to top or to content section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
            <div className="text-center max-w-xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-slate-800">Hello, I'm Enar Leini</h2>
              <p className="text-slate-600 text-lg">
                Freshly graduated Software Engineering student that is open for work in following departments:
                  <li> Full-stack developer</li>
                  <li> Back-end developer</li>
                  <li> Front-end developer</li>
              </p>
              <div className="flex justify-center gap-6 mt-4 text-slate-700">
                <a href="https://github.com/EnarL" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/enar-leini" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:enar.leini00@gmail.com" aria-label="Send Email" className="text-green-600 hover:text-green-800 transition">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
        );
      case "Skills":
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Object.entries(skills).map(([category, list]) => (
                  <section key={category} className="p-6 bg-white rounded-xl shadow border" aria-labelledby={`${category}-skills`}>
                    <h3 id={`${category}-skills`} className="text-lg font-semibold mb-3 text-slate-800">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {list.map((skill, idx) => (
                          <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                          >
                      {skill}
                    </span>
                      ))}
                    </div>
                  </section>
              ))}
            </div>
        );
      case "Projects":
        return (
            <div className="grid gap-6 max-w-4xl mx-auto">
                {projects.map((project, idx) => (
                    <article key={idx} className="bg-white rounded-xl shadow p-6 border" aria-labelledby={`project-title-${idx}`}>
                        <div className="flex justify-between items-start mb-3">
                            <h3 id={`project-title-${idx}`} className="text-xl font-bold text-slate-800">{project.title}</h3>
                            {project.featured && (
                                <span className="flex items-center text-yellow-600 text-sm" aria-label="Featured Project">
          <Star className="w-4 h-4 mr-1" fill="currentColor" />
          Featured
        </span>
                            )}
                        </div>
                        <p className="text-slate-600 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-100 text-sm rounded">
          {tech}
        </span>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition"
                                aria-label={`View source code for ${project.title}`}
                            >
                                <Github className="w-4 h-4" />
                                Code
                            </a>
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                    aria-label={`View live demo of ${project.title}`}
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live
                                </a>
                            )}
                        </div>
                    </article>
                ))}

                <p className="text-center text-slate-600 mt-10">
                    I've also built many smaller projects — feel free to explore them on{" "}
                    <a
                        href="https://github.com/EnarL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        my GitHub
                    </a>
                    .
                </p>

            </div>
        );
      case "Experience":
        return (
            <section className="max-w-2xl mx-auto space-y-4" aria-label="Work Experience">
              <div className="bg-white border rounded-lg p-6 shadow">
                <h3 className="font-semibold text-lg text-slate-800">Software Engineer at TechCorp</h3>
                <p className="text-sm text-blue-600">2022 – Present</p>
                <p className="text-slate-600 mt-2">
                  Working on scalable microservices and mentoring junior engineers.
                </p>
              </div>
            </section>
        );
      case "Contact":
        return (
            <section className="max-w-xl mx-auto text-center space-y-6" aria-label="Contact Information">
                <p className="text-lg text-slate-700">
                    Let's collaborate! Reach me on LinkedIn or email.
                </p>
                <a
                    href="https://drive.google.com/file/d/1Y0tSAtyMX7SRy2-w-zlN_jUMDq3cJF9D/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    aria-label="View Resume on Google Drive"
                >
                    View CV
                </a>

            </section>
        );
        default:
            return null;
    }
  };

    return (
        <main className="bg-white text-slate-800 min-h-screen flex flex-col">

            <section
                className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
                style={{backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')" }}
            aria-label="Hero Section"
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
          <div className="relative z-10 text-center px-4">
            <div className="w-40 h-40 mx-auto rounded-lg overflow-hidden border-4 border-white shadow-lg mb-4">
              <img
                  src="https://via.placeholder.com/300"
                  alt="John Doe profile"
                  className="object-cover w-full h-full"
                  loading="lazy"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-700">John Doe</h1>
            <p className="text-xl text-slate-600 mt-2">Full Stack Developer</p>
            <ChevronDown className="w-8 h-8 text-slate-600 mt-8 animate-bounce mx-auto" />
          </div>
        </section>

        {/* Tabs Navigation */}
        <nav
            className="py-12 bg-white border-t border-slate-200"
            role="tablist"
            aria-label="Portfolio Sections"
        >
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    role="tab"
                    aria-selected={activeTab === tab}
                    aria-controls={`tabpanel-${tab}`}
                    id={`tab-${tab}`}
                    onClick={(e) => handleTabClick(tab, e)}
                    className={`px-5 py-2 rounded-full text-sm font-medium border transition focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        activeTab === tab
                            ? "bg-blue-600 text-white border-blue-600 shadow"
                            : "border-slate-300 text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {tab}
                </button>
            ))}
          </div>
          <section
              id={`tabpanel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              className="px-4 pb-24"
          >
            {renderTabContent()}
          </section>
        </nav>
      </main>
  );
};

export default Home;
