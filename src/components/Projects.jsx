import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce website with cart, payment integration, and admin panel.",
        tech: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/codes-viveksharma/ecommerce-platform",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        color: "from-rose-500/20 to-rose-500/5",
        accent: "text-rose-500",
        border: "hover:border-rose-500/50"
    },
    {
        title: "Task Manager App",
        description: "Real-time task management application with drag & drop functionality using modern frameworks.",
        tech: ["Vue.js", "Express", "Socket.io"],
        link: "https://github.com/codes-viveksharma/task-manager",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        color: "from-cyan-500/20 to-cyan-500/5",
        accent: "text-cyan-500",
        border: "hover:border-cyan-500/50"
    },
    {
        title: "Weather Dashboard",
        description: "Weather forecasting application with location detection and dynamic data visualization.",
        tech: ["JavaScript", "API Integration", "Chart.js"],
        link: "https://github.com/codes-viveksharma/weather-dashboard",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        color: "from-emerald-500/20 to-emerald-500/5",
        accent: "text-emerald-500",
        border: "hover:border-emerald-500/50"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.a
            href={project.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative flex flex-col lg:flex-row gap-8 md:gap-10 p-6 md:p-12 mb-0 md:mb-12 rounded-3xl md:rounded-[3.5rem] bg-gradient-to-br ${project.color} border border-border shadow-2xl shadow-transparent ${project.border} transition-all duration-700 overflow-hidden`}
        >
            {/* Background Glow */}
            <div className={`absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br ${project.color} blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

            <div className="flex-1 flex flex-col justify-between z-10 relative">
                <div>
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                        <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight leading-tight">
                            {project.title}
                        </h3>
                        <ArrowUpRight className={`w-5 h-5 md:w-6 md:h-6 ${project.accent} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 shrink-0`} />
                    </div>
                    <p className="text-base md:text-lg text-muted/90 font-medium leading-relaxed mb-8 md:mb-10 max-w-lg">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-2.5">
                    {project.tech.map((t) => (
                        <span key={t} className="text-[9px] md:text-[10px] font-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-background/50 border border-border text-foreground uppercase tracking-widest backdrop-blur-sm shadow-sm">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2 aspect-video lg:aspect-auto h-56 md:h-64 lg:h-80 rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl group-hover:border-border transition-all duration-1000 z-10">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
            </div>
        </motion.a>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="mb-24 md:mb-48 mt-12 md:mt-24">
            <div className="flex flex-col gap-2 mb-12 md:mb-20 px-2">
                <h2 className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-[0.5em]">Selected Works</h2>
                <p className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">Case Studies</p>
            </div>
            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
