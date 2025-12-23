import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Wrench, Globe, Database, Terminal } from 'lucide-react';

const skillsData = [
    {
        category: "Frontend",
        icon: Layout,
        color: "from-sky-500/20 to-sky-500/5",
        accent: "text-sky-500",
        border: "hover:border-sky-500/50",
        skills: ["HTML5", "CSS3", "JavaScript", "React", "GSAP"]
    },
    {
        category: "Backend",
        icon: Server,
        color: "from-emerald-500/20 to-emerald-500/5",
        accent: "text-emerald-500",
        border: "hover:border-emerald-500/50",
        skills: ["Node.js", "Express.js", "MongoDB", "MySQL"]
    },
    {
        category: "Tools & Others",
        icon: Wrench,
        color: "from-amber-500/20 to-amber-500/5",
        accent: "text-amber-500",
        border: "hover:border-amber-500/50",
        skills: ["Git", "GitHub", "Figma", "Postman", "Vite"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 border-t border-border/50">
            <div className="flex flex-col gap-2 mb-16 px-2">
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
                        className={`p-8 rounded-[3rem] bg-gradient-to-br ${category.color} border border-border shadow-2xl shadow-transparent ${category.border} transition-all duration-500 flex flex-col gap-10 group relative overflow-hidden`}
                    >
                        <div className="flex items-center gap-5 z-10">
                            <div className={`p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border group-hover:scale-110 transition-transform duration-500 ${category.accent}`}>
                                <category.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-black text-foreground uppercase tracking-[0.2em]">{category.category}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2.5 z-10">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-5 py-2.5 rounded-2xl bg-background/40 backdrop-blur-md border border-border/50 text-[11px] font-black text-foreground hover:bg-background transition-all hover:-translate-y-1 shadow-sm"
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
