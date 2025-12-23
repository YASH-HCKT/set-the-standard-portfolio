import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Calendar } from 'lucide-react';

const About = () => {
    const details = [
        { icon: User, label: "Name", value: "Vivek Sharma" },
        { icon: Mail, label: "Email", value: "codes.viveksharma@gmail.com" },
        { icon: MapPin, label: "Location", value: "Jammu, J&K, India" },
        { icon: Calendar, label: "Experience", value: "1+ Years" },
    ];

    return (
        <section id="about" className="py-16 md:py-24">
            <div className="flex flex-col gap-2 mb-10 md:mb-12 px-2">
                <h2 className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-[0.5em]">The Narrative</h2>
                <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tighter">About Me</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                <div className="flex-1 space-y-6 md:space-y-8 min-w-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-16 rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-violet-500/10 via-transparent to-transparent border border-border relative group shadow-2xl shadow-transparent hover:shadow-violet-500/5 transition-all duration-700"
                    >
                        <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] group-hover:opacity-[0.07] group-hover:-rotate-12 transition-all duration-1000">
                            <User className="w-48 h-48 md:w-64 md:h-64" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-foreground mb-6 md:mb-8 tracking-tight">Building Digital Experiences</h3>
                        <p className="text-lg md:text-xl text-muted/90 leading-relaxed font-medium">
                            I'm Vivek Sharma, a passionate Full Stack Developer with expertise in modern web technologies.
                            I love creating responsive, user-friendly applications that solve real-world problems.
                            My focus is on writing clean, efficient code and delivering exceptional user experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 leading-none">
                        {details.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex items-center gap-4 md:gap-5 p-5 md:p-6 rounded-2xl md:rounded-[2rem] bg-background/50 backdrop-blur-md border border-border/50 hover:bg-accent/40 hover:border-violet-500/30 transition-all group ${item.label === 'Email' ? 'sm:col-span-2 min-w-0' : ''}`}
                            >
                                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-accent text-violet-500 group-hover:bg-violet-500 group-hover:text-background transition-all duration-500 shrink-0">
                                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0 overflow-hidden flex-1">
                                    <p className="text-[9px] md:text-[10px] text-muted font-black uppercase tracking-[0.3em] mb-1">{item.label}</p>
                                    <p className="text-sm md:text-base font-black text-foreground truncate" title={item.value}>{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/3 aspect-[4/5] rounded-3xl md:rounded-[3.5rem] overflow-hidden border border-border/50 group shadow-2xl transition-all duration-1000 hover:scale-[1.02]"
                >
                    <img
                        src="/old_portfolio_pic.jpg"
                        alt="Vivek Sharma"
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
