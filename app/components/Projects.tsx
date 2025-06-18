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
            "CVMaker allows everyone create their dream CV and download it in PDF format. To make the experience even smoother the program tracks changes made in CV real-time ",
        tech: ["Node.js", "Next.js", "Redis", "Docker"],
        github: "https://github.com/EnarL/CVMaker",
    },
    {
        title: "Budgeting Application ",
        description: "Users can input their incomes and expenses and track them monthly",
        tech: ["Spring Boot", "Vue.js", "PostgreSQL"],
        github: "https://github.com/EnarL/financeapp",
    },
    {
        title: "Waldur Report Generation App",
        description:
            "The project was made as a group project during a university course, where I was mainly responsible for the backend side and leading communication with the client.",
        tech: ["Django", "Next.js", "Docker", "Kubernetes"],
        github: "https://github.com/EnarL/report-generation-for-waldur-service-providers",
    },
];

const Projects = () => (
    <div className="grid gap-4 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
            <article
                key={idx}
                className="bg-white rounded-xl shadow p-6 border border-gray-200"
                aria-labelledby={`project-title-${idx}`}
            >
                <h3 id={`project-title-${idx}`} className="font-semibold text-xl mb-2 text-gray-900">
                    {project.title}
                </h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded">
              {tech}
            </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
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
        <p className="text-center text-gray-600 mt-10">
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

export default Projects;
