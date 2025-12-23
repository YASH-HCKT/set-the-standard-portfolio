import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ArrowUp, FolderGit2, Mail, HelpCircle } from 'lucide-react';

const BotHelper = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const actions = [
        { icon: FolderGit2, label: "Can I see your work?", action: () => scrollTo('projects') },
        { icon: Mail, label: "How do I reach you?", action: () => scrollTo('contact') },
        { icon: MessageSquare, label: "I want to send a message", action: () => window.location.href = 'mailto:codes.viveksharma@gmail.com' },
        { icon: HelpCircle, label: "What do you specialize in?", action: () => scrollTo('projects') },
        { icon: ArrowUp, label: "Take me back to the top", action: () => scrollTo('home') },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-72 bg-background/80 backdrop-blur-2xl border border-border rounded-2xl shadow-2xl overflow-hidden mb-2"
                    >
                        {/* Header */}
                        <div className="p-4 bg-accent/30 border-b border-border flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-foreground text-background">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-accent rounded-md transition-colors text-muted hover:text-foreground"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col gap-4">
                            <p className="text-sm text-foreground leading-relaxed">
                                Hello! How can I help you navigate the portfolio today?
                            </p>

                            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                                {actions.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={item.action}
                                        className="flex items-center gap-3 p-3 rounded-xl border border-border bg-accent/20 hover:bg-accent transition-all text-sm font-medium text-muted hover:text-foreground text-left group shrink-0"
                                    >
                                        <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-accent text-foreground' : 'bg-foreground text-background'
                    }`}
            >
                {isOpen ? <HelpCircle className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muted opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-muted"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default BotHelper;
