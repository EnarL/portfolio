import React from "react";

const skills = {
    Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Javascript"],
    Backend: ["Java Spring Boot", "Node.js", "Express", "Python", "Django"],
    Other: ["Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Redis", "AWS S3", "Vercel", "Heroku"],
};

const Skills = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {Object.entries(skills).map(([category, list]) => (
            <section
                key={category}
                className="p-6 bg-white rounded-xl shadow border border-gray-200"
                aria-labelledby={`${category}-skills`}
            >
                <h3 id={`${category}-skills`} className="text-lg font-semibold mb-3 text-gray-800">
                    {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {list.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {skill}
            </span>
                    ))}
                </div>
            </section>
        ))}
    </div>
);

export default Skills;
