import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const educationData = [
    {
        period: "2019 - 2022",
        title: "Secondary Education",
        institution: "SP Smart Schools",
        details: "Percentage: 97% | Board: J&K Board",
        icon: School
    },
    {
        period: "2022 - 2024",
        title: "Senior Secondary Education",
        institution: "SP Smart School",
        details: "Percentage: 86% | Science Stream with Computer Science",
        icon: BookOpen
    },
    {
        period: "2024 - 2028",
        title: "Bachelor of Technology in Computer Science",
        institution: "Asansol Engineering College",
        details: "Specialized in Web Development",
        icon: GraduationCap
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 border-t border-border/50">
            <div className="flex flex-col gap-2 mb-16">
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
                        className="group flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-accent/10 border border-border hover:bg-accent/20 transition-all"
                    >
                        <div className="flex md:flex-col justify-between items-start gap-4">
                            <div className="p-4 rounded-2xl bg-background text-muted group-hover:text-foreground transition-colors border border-border">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-muted bg-accent px-3 py-1 rounded-full uppercase tracking-widest border border-border">
                                {item.period}
                            </span>
                        </div>

                        <div className="flex-1 space-y-4">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-1">{item.title}</h3>
                                <p className="text-lg font-medium text-muted">{item.institution}</p>
                            </div>
                            <p className="text-sm text-muted/80 font-medium leading-relaxed bg-background/50 p-4 rounded-xl border border-border/50">
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
