import React, { useState, useEffect } from "react";

const roles = [
    "Full-Stack Developer",
    "Front-end Developer",
    "Back-end Developer",
];

const TypewriterText = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && charIndex < currentRole.length) {
            timeout = setTimeout(() => {
                setDisplayedText(currentRole.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, 100);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayedText(currentRole.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }, 50);
        } else {
            timeout = setTimeout(() => {
                if (isDeleting) {
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
                setIsDeleting((prev) => !prev);
            }, 800);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <span className="whitespace-nowrap font-semibold text-2xl text-gray-100">
      {displayedText}
            <span className="border-r-2 border-white animate-pulse ml-1" />
    </span>
    );
};

export default TypewriterText;
