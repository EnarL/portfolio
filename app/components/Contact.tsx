import React from "react";
import { Linkedin, Mail } from "lucide-react";
import IconLink from "./IconLink";

const Contact = () => (
    <section
        className="max-w-xl mx-auto text-center space-y-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/60 rounded-2xl p-8 shadow-md"
        aria-label="Contact Information"
    >
        <p className="text-lg text-gray-300 max-w-md mx-auto">
            Let's collaborate! Reach me on LinkedIn or email.
        </p>

        <div className="flex justify-center gap-8">
            <IconLink
                href="mailto:enar.leini00@gmail.com"
                label="Send Email"
                className="flex items-center gap-3 text-green-400 hover:text-green-300 transition text-sm font-semibold"
            >
                <Mail className="w-6 h-6" />
                <span>Email Me</span>
            </IconLink>

            <IconLink
                href="https://linkedin.com/in/enar-leini"
                label="LinkedIn Profile"
                className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition text-sm font-semibold"
            >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
            </IconLink>
        </div>

        <a
            href="https://drive.google.com/file/d/1RwlI5qrcMF6X_I6p0WVcEOlnpZyN4gww/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 bg-blue-600 rounded-2xl text-white font-semibold hover:bg-blue-700 transition shadow-md"
            aria-label="View Resume on Google Drive"
        >
            View CV
        </a>
    </section>
);

export default Contact;
