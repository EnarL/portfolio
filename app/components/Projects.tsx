import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Carsale Platform",
        description: "Platform where users can add car listings and also search and filter already existing cars.",
        tech: ["Spring Boot", "Next.js", "MongoDB", "AWS S3", "Docker", "Heroku"],
        github: "https://github.com/EnarL/auto24",
        live: "https://carsale-frontend-f0016e72197f.herokuapp.com/",
    },
    {
        title: "CVMaker",
        description:
            "CVMaker allows everyone to create their dream CV and download it in PDF format. Real-time updates for seamless editing.",
        tech: ["Node.js", "Next.js", "Redis", "Docker"],
        github: "https://github.com/EnarL/CVMaker",
    },
    {
        title: "Budgeting Application",
        description: "Users can input their incomes and expenses and track them monthly.",
        tech: ["Spring Boot", "Vue.js", "PostgreSQL"],
        github: "https://github.com/EnarL/financeapp",
    },
    {
        title: "Waldur Report Generation App",
        description:
            "University group project where I led backend development and client communication.",
        tech: ["Django", "Next.js", "Docker", "Kubernetes"],
        github: "https://github.com/EnarL/report-generation-for-waldur-service-providers",
    },
];

const Projects = () => (
    <section className="max-w-5xl mx-auto px-4 grid gap-10">
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <div
                    key={idx}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/60 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-0.5 text-xs bg-gray-700 text-blue-200 rounded-full border border-gray-600"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                    <div className="flex gap-3 text-sm">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-400 hover:text-blue-200 transition"
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
                                className="flex items-center gap-1 text-green-400 hover:text-green-200 transition"
                                aria-label={`View live demo of ${project.title}`}
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
        <p className="text-center text-gray-400 text-sm">
            I've also built many smaller projects — explore them on{" "}
            <a
                href="https://github.com/EnarL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
            >
                my GitHub
            </a>
            .
        </p>
    </section>
);

export default Projects;
