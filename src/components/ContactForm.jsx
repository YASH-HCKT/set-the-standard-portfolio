import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);
        // Replace YOUR_ACCESS_KEY_HERE with the key from web3forms.com
        formData.append("access_key", "bbfc4f93-ed17-4a94-be01-ad93493ef6bf");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                e.target.reset();
            } else {
                console.log("Error", data);
                setStatus('error');
                setMessage(data.message);
            }
        } catch (error) {
            console.log("Error", error);
            setStatus('error');
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="w-full max-w-2xl bg-accent/20 border border-border rounded-3xl p-8 md:p-12 mb-20 relative">
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
                            className="bg-background border border-border rounded-xl px-5 py-3 text-foreground focus:outline-none focus:border-muted transition-colors w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] text-muted font-bold uppercase tracking-widest pl-1">Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            className="bg-background border border-border rounded-xl px-5 py-3 text-foreground focus:outline-none focus:border-muted transition-colors w-full"
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
                        className="bg-background border border-border rounded-xl px-5 py-3 text-foreground focus:outline-none focus:border-muted transition-colors resize-none w-full"
                    ></textarea>
                </div>

                {/* Hidden Honeypot to prevent spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="flex flex-col gap-4">
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full md:w-auto px-10 py-4 bg-foreground text-background rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                    >
                        {status === 'sending' ? (
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin"></span>
                                Sending...
                            </span>
                        ) : status === 'success' ? (
                            <span className="flex items-center gap-2 text-green-500">
                                <CheckCircle2 className="w-5 h-5" />
                                Sent
                            </span>
                        ) : (
                            <>
                                Send Message
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>

                    {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-red-500 text-sm font-medium mt-2"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {message || "Failed to send message."}
                        </motion.div>
                    )}

                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-green-500 text-xs font-bold uppercase tracking-widest mt-2"
                        >
                            Thank you! Your message has been sent successfully.
                        </motion.p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
