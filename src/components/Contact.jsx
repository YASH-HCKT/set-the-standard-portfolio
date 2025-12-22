import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:hello@vivek.dev", label: "hello@vivek.dev" },
    { name: "GitHub", icon: Github, url: "#", label: "github.com/vivek" },
    { name: "LinkedIn", icon: Linkedin, url: "#", label: "linkedin.com/in/vivek" },
];

const Contact = () => {
    return (
        <section className="pb-40">
            <h2 className="text-xs font-bold text-muted uppercase tracking-[0.5em] mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col gap-4 p-8 rounded-2xl border border-border bg-accent/30 hover:bg-accent transition-all group"
                    >
                        <div className="p-3 w-fit rounded-xl bg-background text-muted group-hover:text-foreground group-hover:scale-110 transition-all border border-border">
                            <link.icon className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-muted font-bold uppercase tracking-widest mb-1">{link.name}</span>
                            <span className="text-lg text-foreground font-semibold break-words transition-colors">{link.label}</span>
                        </div>
                    </motion.a>
                ))}
            </div>

            <footer className="mt-40 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted font-bold uppercase tracking-[0.2em]">
                <p>© {new Date().getFullYear()} Vivek Sharma.</p>
                <p>Built with React & Tailwind V4</p>
            </footer>
        </section>
    );
};

export default Contact;
