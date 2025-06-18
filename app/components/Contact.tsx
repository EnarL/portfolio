import React from "react";
import { Linkedin, Mail } from "lucide-react";
import IconLink from "./IconLink";

const Contact = () => (
    <section className="max-w-xl mx-auto text-center space-y-6" aria-label="Contact Information">
        <p className="text-lg text-gray-700">Let's collaborate! Reach me on LinkedIn or email.</p>
        <div className="flex justify-center gap-6">
            <IconLink href="mailto:enar.leini00@gmail.com" label="Send Email" className="text-green-700 hover:text-green-900">
                <Mail className="w-6 h-6 inline mr-2" />
                <span className="align-middle">Email Me</span>
            </IconLink>
            <IconLink href="https://linkedin.com/in/enar-leini" label="LinkedIn Profile" className="text-blue-700 hover:text-blue-900">
                <Linkedin className="w-6 h-6 inline mr-2" />
                <span className="align-middle">LinkedIn</span>
            </IconLink>
        </div>
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

export default Contact;
