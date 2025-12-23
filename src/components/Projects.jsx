import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce website with cart, payment integration, and admin panel.",
        tech: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/codes-viveksharma/ecommerce-platform"
    },
    {
        title: "Task Manager App",
        description: "Real-time task management application with drag & drop functionality using modern frameworks.",
        tech: ["Vue.js", "Express", "Socket.io"],
        link: "https://github.com/codes-viveksharma/task-manager"
    },
    {
        title: "Weather Dashboard",
        description: "Weather forecasting application with location detection and dynamic data visualization.",
        tech: ["JavaScript", "API Integration", "Chart.js"],
        link: "https://github.com/codes-viveksharma/weather-dashboard"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.a
            href={project.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block p-8 -mx-8 rounded-2xl hover:bg-accent transition-all duration-500 border border-transparent hover:border-border"
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-foreground transition-colors">
                    {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground transition-all opacity-0 group-hover:opacity-100 translate-x--2 group-hover:translate-x-0" />
            </div>
            <p className="text-muted mb-8 leading-relaxed max-w-xl text-lg">
                {project.description}
            </p>
            <div className="flex gap-4">
                {project.tech.map((t) => (
                    <span key={t} className="text-[10px] text-muted font-bold px-3 py-1 rounded-full bg-accent uppercase tracking-widest border border-border">
                        {t}
                    </span>
                ))}
            </div>
        </motion.a>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="mb-48 mt-24">
            <h2 className="text-xs font-bold text-muted uppercase tracking-[0.5em] mb-12">Selected Projects</h2>
            <div className="grid gap-2">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
