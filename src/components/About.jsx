import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Calendar } from 'lucide-react';

const About = () => {
    const details = [
        { icon: User, label: "Name", value: "Vivek Sharma" },
        { icon: Mail, label: "Email", value: "codes.viveksharma@gmail.com" },
        { icon: MapPin, label: "Location", value: "Asansol, West Bengal, India" },
        { icon: Calendar, label: "Experience", value: "2+ Years" },
    ];

    return (
        <section id="about" className="py-24">
            <div className="flex flex-col gap-2 mb-12">
                <h2 className="text-xs font-bold text-muted uppercase tracking-[0.5em]">The Narrative</h2>
                <p className="text-4xl font-bold text-foreground tracking-tighter">About Me</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 rounded-[2rem] bg-accent/20 border border-border overflow-hidden relative group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <User className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-6">Building Digital Experiences</h3>
                        <p className="text-lg text-muted leading-relaxed">
                            I'm Vivek Sharma, a passionate Full Stack Developer with expertise in modern web technologies.
                            I love creating responsive, user-friendly applications that solve real-world problems.
                            My focus is on writing clean, efficient code and delivering exceptional user experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {details.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 p-6 rounded-2xl bg-background border border-border hover:bg-accent/50 transition-colors"
                            >
                                <div className="p-3 rounded-xl bg-accent text-muted group-hover:text-foreground">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted font-bold uppercase tracking-widest">{item.label}</p>
                                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/3 aspect-[4/5] rounded-[3rem] bg-accent overflow-hidden border border-border group"
                >
                    <img
                        src="/old_portfolio_pic.jpg"
                        alt="Vivek Sharma"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
