"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VisaPage() {
    const handleWhatsApp = () => {
        const phone = "9779841743706";
        const text = "Hello JetSet, I'd like to inquire about visa processing.";
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-white pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-[#079d9a] font-bold uppercase tracking-widest text-[10px]">Specialized Services</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">Visa Processing <br /> <span className="text-slate-400">Made Simple.</span></h1>
                    <p className="text-slate-500 text-lg mb-12">We handle the paperwork while you plan your trip. Fast, reliable, and high success rates.</p>
                </motion.div>

                {/* Simple 3-Box Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: Globe, t: "Global Access", d: "Schengen, USA, UK, Dubai, Thailand & more." },
                        { icon: ShieldCheck, t: "Expert Review", d: "Your documents are checked by specialists." },
                        { icon: CheckCircle2, t: "High Success", d: "Proven track record of approvals." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-slate-100 rounded-[2rem] bg-[#FDFDFD] hover:shadow-lg transition-all">
                            <item.icon className="w-8 h-8 text-[#079d9a] mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">{item.t}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                {/* The Action Box */}
                <div className="  bg-[#079d9a] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Start Your Application</h2>
                        <p className="text-slate-400 mb-8 max-w-sm mx-auto">Get a free 10-minute consultation on WhatsApp regarding your documentation.</p>
                        <Button
                            onClick={handleWhatsApp}
                            className="bg-white text-[#079d9a] hover:bg-[#079d9a] text-black h-16 px-10 rounded-2xl font-bold uppercase tracking-widest text-xs"
                        >
                            Consult an Expert <MessageSquare className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    {/* Decorative Teal glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#079d9a]/10 blur-3xl rounded-full" />
                </div>

            </div>
        </main>
    );
}