import React from "react";

interface IconLinkProps {
    href: string;
    label: string;
    children: React.ReactNode;
    className?: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, label, children, className = "" }) => (
    <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-gray-900 transition ${className}`}
    >
        {children}
    </a>
);

export default IconLink;
