import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Mocking a send action
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <div className="w-full max-w-2xl bg-accent/20 border border-border rounded-3xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] text-muted font-bold uppercase tracking-widest pl-1">Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="bg-background border border-border rounded-xl px-5 py-3 text-foreground focus:outline-none focus:border-muted transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] text-muted font-bold uppercase tracking-widest pl-1">Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            className="bg-background border border-border rounded-xl px-5 py-3 text-foreground focus:outline-none focus:border-muted transition-colors"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] text-muted font-bold uppercase tracking-widest pl-1">Message</label>
                    <textarea
                        required
                        name="message"
                        rows="5"
                        placeholder="How can I help you?"
                        className="bg-background border border-border rounded-xl px-5 py-3 text-foreground focus:outline-none focus:border-muted transition-colors resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full md:w-auto px-10 py-4 bg-foreground text-background rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                    {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : (
                        <>
                            Send Message
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
