"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Send,
    MessageSquare,
    Clock,
    Facebook,
    Instagram,
    Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_INFO = [
    {
        icon: Phone,
        label: "Call Us",
        value: "+977 9846983690",
        description: "Mon-Fri from 9am to 6pm.",
    },
    {
        icon: Mail,
        label: "Email Us",
        value: "support@jetset.com",
        description: "Our team usually responds within 24h.",
    },
    {
        icon: MapPin,
        label: "Visit Us",
        value: "Kathmandu, Nepal",
        description: "Main Square, Tourism District.",
    },
];

export default function ContactPage() {
    // 1. State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Flight Ticketing",
        message: "",
    });

    // 2. The WhatsApp Function
    const handleWhatsAppSend = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.message) {
            alert("Please enter your name and message.");
            return;
        }

        const phoneNumber = "9779841743706"; // Your   number

        // Construct the encoded message for WhatsApp
        const text = `*New Inquiry from JetSet*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Interest:* ${formData.service}%0A` +
            `*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* HEADER SECTION */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#079d9a] font-bold uppercase tracking-[0.3em] text-[10px]"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 mt-4 mb-6 tracking-tighter"
                    >
                        How can we <span className="text-slate-400">help you?</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg font-light"
                    >
                        Whether you're looking for a luxury getaway or have a question about your booking, our elite concierge team is here for you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT COLUMN: CONTACT INFO CARDS */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            {CONTACT_INFO.map((item, idx) => (
                                <div key={idx} className="group flex gap-6 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#079d9a]/20 transition-all duration-500">
                                    <div className="h-14 w-14 rounded-2xl bg-[#079d9a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#079d9a] transition-colors duration-500">
                                        <item.icon className="h-6 w-6 text-[#079d9a] group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</h4>
                                        <p className="text-xl font-bold text-slate-900 mb-1">{item.value}</p>
                                        <p className="text-sm text-slate-400 font-medium">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* SOCIALS CARD */}
                        <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-3">
                                <Clock className="text-[#079d9a] w-5 h-5" />
                                <span className="text-sm font-bold uppercase tracking-tight">Available 24/7 on Socials</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#079d9a] cursor-pointer transition-all"><Facebook className="w-4 h-4" /></div>
                                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#079d9a] cursor-pointer transition-all"><Instagram className="w-4 h-4" /></div>
                                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#079d9a] cursor-pointer transition-all"><Twitter className="w-4 h-4" /></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: PREMIUM CONTACT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative Teal Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#079d9a]/5 rounded-full -mr-16 -mt-16 blur-3xl" />

                        <form className="space-y-8 relative z-10" onSubmit={handleWhatsAppSend}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 ring-[#079d9a]/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 ring-[#079d9a]/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service Interest</label>
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 ring-[#079d9a]/20 outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option>Flight Ticketing</option>
                                    <option>Travel Package</option>
                                    <option>Vehicle Rental</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    placeholder="Tell us about your dream trip..."
                                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 ring-[#079d9a]/20 outline-none transition-all resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-16 bg-[#079d9a] hover:bg-[#068a87] text-white rounded-2xl font-bold uppercase tracking-widest shadow-lg shadow-[#079d9a]/20 group"
                            >
                                Send via WhatsApp
                                <MessageSquare className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}