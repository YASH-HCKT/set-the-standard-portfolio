import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:hello@vivek.dev", label: "hello@vivek.dev" },
    { name: "GitHub", icon: Github, url: "#", label: "github.com/vivek" },
    { name: "LinkedIn", icon: Linkedin, url: "#", label: "linkedin.com/in/vivek" },
    // { name: "Twitter", icon: Twitter, url: "#", label: "@vivek" },
];

const Contact = () => {
    return (
        <section>
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 hover:border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group"
                    >
                        <div className="p-2 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
                            <link.icon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-500 font-medium">{link.name}</span>
                            <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{link.label}</span>
                        </div>
                    </motion.a>
                ))}
            </div>

            <footer className="mt-24 pt-12 border-t border-zinc-900 flex justify-between items-center text-xs text-zinc-600">
                <p>© {new Date().getFullYear()} Vivek Sharma.</p>
                <p>Built with React & Tailwind</p>
            </footer>
        </section>
    );
};

export default Contact;
