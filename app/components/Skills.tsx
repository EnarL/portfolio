import React from "react";
import {
    SiReact,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiSpringboot,
    SiNodedotjs,
    SiVuedotjs,
    SiExpress,
    SiPython,
    SiDjango,
    SiDocker,
    SiKubernetes,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiVercel,
    SiAmazons3,
    SiHeroku,
} from "react-icons/si";

const skills = {
    Frontend: [
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "JavaScript", icon: SiJavascript },
    ],
    Backend: [
        { name: "Java Spring Boot", icon: SiSpringboot },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "Python", icon: SiPython },
        { name: "Django", icon: SiDjango },
    ],
    Other: [
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Redis", icon: SiRedis },
        { name: "Vercel", icon: SiVercel },
        { name: "Heroku", icon: SiHeroku },
        { name: "AWS S3", icon: SiAmazons3 },
    ],
};

const Skills = () => (
    <section className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, list]) => (
            <div
                key={category}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/60 rounded-2xl p-6 shadow-md"
            >
                <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                    {list.map(({ name, icon: Icon }, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-700/60 text-sm rounded-full text-blue-200 border border-gray-600 hover:shadow-md transition"
                        >
                            <Icon className="w-4 h-4" />
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </section>
);

export default Skills;
