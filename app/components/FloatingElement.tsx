import React from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
    delay?: number;
    children: React.ReactNode;
    className?: string;
}

const FloatingElement = ({ delay = 0, children, className = "" }: FloatingElementProps) => (
    <motion.div
        className={`absolute ${className}`}
        initial={{ opacity: 0 }}
        animate={{
            opacity: [0.2, 0.6, 0.2],
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
        }}
        transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
        }}
    >
        {children}
    </motion.div>
);

export default FloatingElement;
