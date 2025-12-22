import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderGit2, Mail, Layers } from 'lucide-react';

const Sidebar = () => {
    const icons = [
        { icon: Home, label: "Home" },
        { icon: User, label: "About" },
        { icon: FolderGit2, label: "Projects" },
        { icon: Layers, label: "Services" },
        { icon: Mail, label: "Contact" },
    ];

    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed left-0 top-0 bottom-0 w-20 flex flex-col items-center justify-center gap-8 bg-zinc-900/10 backdrop-blur-sm z-50 border-r border-white/5"
        >
            <div className="absolute top-8">
                {/* Logo or initial could go here */}
            </div>

            <div className="flex flex-col gap-6">
                {icons.map((item, index) => (
                    <button
                        key={index}
                        className="p-3 rounded-full text-zinc-500 hover:text-white hover:bg-white/10 transition-all duration-300 group relative"
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="absolute left-14 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

export default Sidebar;
