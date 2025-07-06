import React from "react";
import GlowingOrb from "./GlowingOrb";
import FloatingElement from "./FloatingElement";
import { Star, Sparkles, Zap, Code } from "lucide-react";

interface BackgroundEffectsProps {
    mouseX: number;
    mouseY: number;
}

const BackgroundEffects = ({ mouseX, mouseY }: BackgroundEffectsProps) => (
    <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gray-900/20" />
        <div
            className="absolute w-96 h-96 rounded-full bg-gray-700/20 blur-3xl transition-all duration-700 ease-out"
            style={{ left: mouseX - 192, top: mouseY - 192 }}
        />
        <GlowingOrb className="top-20 left-20" delay={0} />
        <GlowingOrb className="top-40 right-32" delay={2} />
        <GlowingOrb className="bottom-40 left-32" delay={4} />
        <GlowingOrb className="bottom-20 right-20" delay={6} />
        <FloatingElement delay={0} className="top-32 left-16">
            <Star className="w-6 h-6 text-gray-500/40" />
        </FloatingElement>
        <FloatingElement delay={2} className="top-64 right-24">
            <Sparkles className="w-8 h-8 text-gray-500/40" />
        </FloatingElement>
        <FloatingElement delay={4} className="bottom-64 left-24">
            <Zap className="w-5 h-5 text-gray-500/40" />
        </FloatingElement>
        <FloatingElement delay={6} className="bottom-32 right-16">
            <Code className="w-6 h-6 text-gray-500/40" />
        </FloatingElement>
    </div>
);

export default BackgroundEffects;
