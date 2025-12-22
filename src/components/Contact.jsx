import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
    { name: "Email", icon: Mail, url: "mailto:codes.viveksharma@gmail.com", label: "codes.viveksharma@gmail.com" },
    { name: "Phone", icon: Phone, url: "tel:+917006356523", label: "+91 70063 56523" },
    { name: "Location", icon: MapPin, url: "#", label: "Asansol, West Bengal, India" },
    { name: "GitHub", icon: Github, url: "https://github.com/codes-viveksharma", label: "github.com/codes-viveksharma" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/viveksharma262005/", label: "linkedin.com/in/viveksharma262005" },
];

const Contact = () => {
    return (
        <section id="contact" className="pb-40 pt-20">
            <div className="flex flex-col gap-2 mb-12">
                <h2 className="text-xs font-bold text-muted uppercase tracking-[0.5em]">Contact</h2>
                <p className="text-4xl font-bold text-foreground tracking-tighter">Let's build something together.</p>
            </div>

            <ContactForm />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactInfo.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        target={link.url.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
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
                            <span className="text-lg text-foreground font-semibold break-all transition-colors">{link.label}</span>
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
