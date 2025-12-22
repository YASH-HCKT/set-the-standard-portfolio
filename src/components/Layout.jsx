import React from 'react';
import Sidebar from './Sidebar';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Layout = ({ children }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-white/10 selection:text-white flex flex-row">
            <Sidebar />

            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute top-0 left-0 right-0 -z-10 h-[500px] w-full bg-gradient-to-b from-accent/20 to-transparent pointer-events-none" />

            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className="fixed top-8 right-8 z-50 p-3 rounded-full bg-accent border border-border text-foreground hover:scale-110 transition-all duration-300 shadow-xl"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <main className="flex-1 ml-20 min-h-screen flex flex-col relative w-full overflow-x-hidden">
                {children}
            </main>
        </div>
    );
};

export default Layout;
