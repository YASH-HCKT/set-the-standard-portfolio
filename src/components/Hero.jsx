import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col md:flex-row relative overflow-hidden">
            {/* Text Content - Left Side */}
            <div className="flex-1 flex flex-col justify-center px-12 md:pl-24 relative z-10 pt-20 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
                        Vivek Sharma
                    </h1>
                    <div className="text-2xl md:text-3xl text-zinc-400 font-light flex items-center gap-3 mb-8">
                        <span>I'm</span>
                        <span className="text-white border-b-2 border-zinc-700 pb-1">Developer</span>
                    </div>

                    <div className="flex items-center gap-6 text-zinc-500">
                        <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                </motion.div>
            </div>

            {/* Image Content - Right Side */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="flex-1 relative h-[50vh] md:h-auto"
            >
                {/* Background gradient/mist effect for the right side to blend */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background z-10 md:bg-gradient-to-l"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>

                <img
                    src="/profile.jpg"
                    alt="Vivek Sharma"
                    className="w-full h-full object-cover object-top opacity-90 scale-90 origin-top-right md:origin-top"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
