import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderGit2, Mail, Layers } from 'lucide-react';

const Sidebar = () => {
    const icons = [
        { icon: Home, label: "Home", href: "#home" },
        { icon: User, label: "About", href: "#about" },
        { icon: FolderGit2, label: "Projects", href: "#projects" },
        { icon: Layers, label: "Services", href: "#" },
        { icon: Mail, label: "Contact", href: "#contact" },
    ];

    const handleScroll = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed left-0 top-0 bottom-0 w-20 flex flex-col items-center justify-center gap-8 bg-background/5 backdrop-blur-xl z-50 border-r border-border"
        >
            <div className="flex flex-col gap-6">
                {icons.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="p-3 rounded-full text-muted hover:text-foreground hover:bg-accent transition-all duration-300 group relative"
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="absolute left-14 bg-foreground text-background text-[10px] px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-bold shadow-lg">
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

export default Sidebar;
