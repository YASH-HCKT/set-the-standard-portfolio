import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const educationData = [
    {
        period: "2019 - 2022",
        title: "Secondary Education",
        institution: "SP Smart Schools",
        details: "Percentage: 97% | Board: J&K Board",
        icon: School,
        color: "from-blue-500/20 to-transparent",
        accent: "text-blue-500",
        border: "group-hover:border-blue-500/50"
    },
    {
        period: "2022 - 2024",
        title: "Senior Secondary Education",
        institution: "SP Smart School",
        details: "Percentage: 86% | Science Stream with Computer Science",
        icon: BookOpen,
        color: "from-indigo-500/20 to-transparent",
        accent: "text-indigo-500",
        border: "group-hover:border-indigo-500/50"
    },
    {
        period: "2024 - 2028",
        title: "Bachelor of Technology in Computer Science",
        institution: "Asansol Engineering College",
        details: "Specialized in Web Development",
        icon: GraduationCap,
        color: "from-purple-500/20 to-transparent",
        accent: "text-purple-500",
        border: "group-hover:border-purple-500/50"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 border-t border-border/50">
            <div className="flex flex-col gap-2 mb-16 px-2">
                <h2 className="text-xs font-bold text-muted uppercase tracking-[0.5em]">Academic Journey</h2>
                <p className="text-4xl font-bold text-foreground tracking-tighter">Education</p>
            </div>

            <div className="grid gap-8">
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group flex flex-col md:flex-row gap-8 p-8 rounded-[2rem] bg-gradient-to-br ${item.color} border border-border/50 ${item.border} transition-all duration-500 relative overflow-hidden`}
                    >
                        {/* Decorative background glow */}
                        <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${item.color} blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                        <div className="flex md:flex-col justify-between items-start gap-4 z-10">
                            <div className={`p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border group-hover:scale-110 transition-transform duration-500 ${item.accent}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black text-muted bg-background/40 backdrop-blur-sm px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-border/30">
                                {item.period}
                            </span>
                        </div>

                        <div className="flex-1 space-y-4 z-10">
                            <div>
                                <h3 className="text-2xl font-black text-foreground mb-1 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                                <p className="text-lg font-bold text-muted/80">{item.institution}</p>
                            </div>
                            <p className="text-[13px] text-muted font-medium leading-relaxed bg-background/30 backdrop-blur-md p-5 rounded-2xl border border-border/30 shadow-sm">
                                {item.details}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
