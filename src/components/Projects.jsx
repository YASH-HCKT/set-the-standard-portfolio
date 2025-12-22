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
    },
    // Add more mock projects as needed
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.a
            href={project.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block p-6 -mx-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
                {project.description}
            </p>
            <div className="flex gap-3">
                {project.tech.map((t) => (
                    <span key={t} className="text-xs text-zinc-500 font-medium px-2 py-1 rounded-full bg-zinc-900/50 border border-zinc-800">
                        {t}
                    </span>
                ))}
            </div>
        </motion.a>
    );
};

const Projects = () => {
    return (
        <section className="mb-32">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">Selected Projects</h2>
            <div className="grid gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
