import React from "react";
import { motion } from "framer-motion";

interface GlowingOrbProps {
    className?: string;
    delay?: number;
}

const GlowingOrb = ({ className = "", delay = 0 }: GlowingOrbProps) => (
    <motion.div
        className={`absolute w-4 h-4 rounded-full bg-gray-600 blur-sm ${className}`}
        animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
        }}
        transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
        }}
    />
);

export default GlowingOrb;
