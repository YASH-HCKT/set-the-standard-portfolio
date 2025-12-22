import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-white/10 selection:text-white flex flex-row">
            <Sidebar />
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute top-0 left-0 right-0 -z-10 h-[500px] w-full bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none" />

            <main className="flex-1 ml-20 min-h-screen flex flex-col relative w-full overflow-x-hidden">
                {children}
            </main>
        </div>
    );
};

export default Layout;
