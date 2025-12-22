import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Flight Booking Engine",
        description: "A comprehensive flight search and booking platform built with React and modern booking flows.",
        tech: ["React", "Vite", "Tailwind"],
        link: "#"
    },
    {
        title: "E-Commerce Dashboard",
        description: "Real-time analytics dashboard for online retailers featuring data visualization.",
        tech: ["Next.js", "Recharts", "Prisma"],
        link: "#"
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
