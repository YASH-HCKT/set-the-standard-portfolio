import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import TypedText from './TypedText';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const roles = ["Full Stack Developer", "UI/UX Designer", "Software Developer"];
    const { theme } = useTheme();

    return (
        <section className="min-h-screen w-full flex flex-col md:flex-row relative overflow-hidden">
            {/* Main Content Area - Left Side */}
            <div className="flex-1 flex flex-col justify-center px-12 md:pl-24 relative z-10 py-20">

                {/* 1. Introductory Section (Top/Middle) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <h2 className="text-xl md:text-2xl font-light text-muted tracking-widest uppercase mb-4">
                        Vivek Sharma
                    </h2>
                    <div className="text-3xl md:text-5xl text-foreground font-bold flex items-center gap-3">
                        <span className="text-muted font-light italic">I'm</span>
                        <TypedText words={roles} />
                    </div>
                </motion.div>

                {/* 2. Main Statement (The "Title" requested - Bottom Area) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-12 group"
                >
                    <h1 className="text-6xl md:text-[8rem] font-black text-foreground leading-[0.9] tracking-tighter uppercase mb-12">
                        SET THE <br />
                        <span className="text-muted opacity-30 group-hover:opacity-60 transition-opacity duration-500">STANDARD.</span>
                    </h1>

                    <div className="flex flex-col gap-1 items-start">
                        <div className="w-12 h-px bg-muted mb-2 opacity-30"></div>
                        <p className="text-[10px] text-muted uppercase tracking-[0.4em] font-bold">Vivek Sharma</p>
                    </div>
                </motion.div>

                {/* Social Links */}
                <div className="fixed bottom-12 left-12 md:left-24 flex items-center gap-6 text-muted z-20">
                    <a href="#" className="hover:text-foreground transition-all hover:scale-110"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-foreground transition-all hover:scale-110"><Github className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-foreground transition-all hover:scale-110"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-foreground transition-all hover:scale-110"><Mail className="w-5 h-5" /></a>
                </div>
            </div>

            {/* Image Content - Right Side */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex-1 relative h-[50vh] md:h-screen"
            >
                {/* Gradients to blend image into the background */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: `linear-gradient(to left, transparent, var(--bg) 95%)`
                    }}
                ></div>
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: `linear-gradient(to bottom, transparent, transparent, var(--bg) 98%)`
                    }}
                ></div>

                <img
                    src="/profile.jpg"
                    alt="Vivek Sharma"
                    className={`w-full h-full object-cover object-top transition-all duration-1000 ${theme === 'dark' ? 'grayscale opacity-80' : 'opacity-90'}`}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
