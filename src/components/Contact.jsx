import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

const contactInfo = [
    { name: "Email", icon: Mail, url: "mailto:codes.viveksharma@gmail.com", label: "codes.viveksharma@gmail.com" },
    { name: "Phone", icon: Phone, url: "tel:+917006356523", label: "+91 70063 56523" },
    { name: "Location", icon: MapPin, url: "#", label: "Jammu, J&K, India" },
    { name: "GitHub", icon: Github, url: "https://github.com/codes-viveksharma", label: "github.com/codes-viveksharma" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/viveksharma262005/", label: "linkedin.com/in/viveksharma262005" },
];

const Contact = () => {
    return (
        <section id="contact" className="pb-56 md:pb-40 pt-20">
            <div className="flex flex-col gap-2 mb-12">
                <h2 className="text-xs font-bold text-muted uppercase tracking-[0.5em]">Get in Touch</h2>
                <p className="text-4xl font-bold text-foreground tracking-tighter">Let's build something together.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

            {/* Direct Email CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden p-12 md:p-20 rounded-[3rem] border border-border bg-foreground text-background"
            >
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Mail className="w-60 h-60" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-8">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-60">Ready to start?</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Send me an email directly.</h2>
                    </div>

                    <p className="text-lg opacity-80 leading-relaxed text-balance">
                        Whether you have a specific project in mind or just want to chat about technology, my inbox is always open.
                    </p>

                    <a
                        href="mailto:codes.viveksharma@gmail.com"
                        className="group flex items-center gap-4 px-10 py-5 bg-background text-foreground rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
                    >
                        Contact Me
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-2 mt-4 text-[10px] font-bold uppercase tracking-widest opacity-60">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        
                    </div>
                </div>
            </motion.div>

            <footer className="mt-40 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted font-bold uppercase tracking-[0.2em]">
                <p>© {new Date().getFullYear()} Vivek Sharma.</p>
                <p>Built with React & Tailwind V4</p>
            </footer>
        </section>
    );
};

export default Contact;
