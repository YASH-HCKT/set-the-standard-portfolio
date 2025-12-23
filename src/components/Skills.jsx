import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Wrench, Globe, Database, Terminal } from 'lucide-react';

const skillsData = [
    {
        category: "Frontend",
        icon: Layout,
        skills: ["HTML5", "CSS3", "JavaScript", "React", "GSAP"]
    },
    {
        category: "Backend",
        icon: Server,
        skills: ["Node.js", "Express.js", "MongoDB", "MySQL"]
    },
    {
        category: "Tools & Others",
        icon: Wrench,
        skills: ["Git", "GitHub", "Figma", "Postman", "Vite"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 border-t border-border/50">
            <div className="flex flex-col gap-2 mb-16">
                <h2 className="text-xs font-bold text-muted uppercase tracking-[0.5em]">Technical Stack</h2>
                <p className="text-4xl font-bold text-foreground tracking-tighter">Skills & Expertise</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-[2.5rem] bg-accent/20 border border-border hover:bg-accent/30 transition-all flex flex-col gap-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-background text-muted border border-border">
                                <category.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground uppercase tracking-widest">{category.category}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 rounded-xl bg-background border border-border text-xs font-bold text-foreground hover:border-muted transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
