"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Plane, Globe, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VALUES = [
    {
        icon: ShieldCheck,
        title: "Safety First",
        desc: "Every flight and vehicle undergoes rigorous multi-point inspections by certified engineers.",
    },
    {
        icon: Award,
        title: "Premium Quality",
        desc: "We only partner with 5-star airlines and maintain a fleet of current-year luxury SUVs.",
    },
    {
        icon: Globe,
        title: "Global Network",
        desc: "Access to over 150+ destinations with localized concierge support in every city.",
    },
];

const STATS = [
    { label: "Active Travelers", val: "10k+" },
    { label: "Elite Vehicles", val: "80+" },
    { label: "Destinations", val: "150+" },
    { label: "Awards Won", val: "12" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-32 pb-20 overflow-hidden">
            {/* SECTION 1: HERO STORY */}
            <section className="px-6 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#079d9a] font-bold uppercase tracking-[0.3em] text-[10px]">
                            Our Story
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mt-4 mb-8 tracking-tighter">
                            The Art of <br /> <span className="text-slate-400 font-light italic text-6xl md:text-8xl">Travel</span>
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                            JetSet was founded on a single premise: travel should be an experience, not a chore. What started as a small boutique flight agency in Kathmandu has grown into Nepal’s premier network for luxury transport and global ticketing.
                        </p>
                        <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                            We don't just book tickets; we curate journeys. From the moment you leave your door to the second you arrive at your destination, our mission is to provide uncompromising excellence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/services">
                                <Button className="bg-[#079d9a] hover:bg-[#068a87] text-white px-8 h-14 rounded-2xl font-bold uppercase tracking-widest text-[11px]">
                                    Explore Packages
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* CREATIVE IMAGE GRID */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] md:h-[600px]"
                    >
                        <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[3.5rem] overflow-hidden shadow-2xl z-10">
                            <Image
                                src="/chitwan.jpg"
                                alt="Chitwan "
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl z-20">
                            <Image
                                src="/hiace.jpg"
                                alt="Premium  Hiace"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: STATS BAR */}
            {/* <section className="bg-slate-900 py-20 px-6 mb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-[#079d9a] text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                                {stat.val}
                            </h3>
                            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section> */}

            {/* SECTION 3: CORE VALUES */}
            <section className="px-6 max-w-7xl mx-auto mb-32">
                <div className="text-center mb-20">
                    <h2 className="text-[#079d9a] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                        Our Philosophy
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Built on <span className="text-slate-400 underline decoration-[#079d9a]/20">Trust</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {VALUES.map((val, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="h-14 w-14 rounded-2xl bg-[#079d9a]/10 flex items-center justify-center mb-6">
                                <val.icon className="text-[#079d9a] w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 4: FINAL CTA */}
            <section className="px-6 max-w-7xl mx-auto">
                <div className="relative bg-[#079d9a] rounded-[3.5rem] p-12 md:p-24 text-center text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <Heart className="w-12 h-12 text-white/40 mx-auto mb-6" />
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
                            Ready to start your next adventure?
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-white text-[#079d9a] hover:bg-slate-100 px-10 h-16 rounded-2xl font-bold uppercase tracking-widest text-xs w-full md:w-auto">
                                    Talk to Concierge
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-10 h-16 rounded-2xl font-bold uppercase tracking-widest text-xs w-full md:w-auto">
                                    View Destinations
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}