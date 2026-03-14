"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
const destinations = [
    { id: 1, name: "Lumbini", country: "Nepal", img: "/lumbini.jpg", visitors: 10 },
    { id: 2, name: "Chitwan National Park", country: "Nepal", img: "/chitwan.jpg", visitors: 18 },
    { id: 3, name: "Paris", country: "France", img: "/paris.jpg", visitors: 25 },
    { id: 4, name: "Dubai", country: "UAE", img: "/dubai.jpg", visitors: 30 },
    { id: 5, name: "Bali", country: "Indonesia", img: "/bali.jpg", visitors: 15 },
    { id: 6, name: "Pokhara", country: "Nepal", img: "/pokhara.jpg", visitors: 10 },
    { id: 7, name: "Ghandruk ", country: "Nepal", img: "/Ghandruk.jpg", visitors: 10 },

];

export default function TopDestinations() {
    const [index, setIndex] = useState(0);

    // Logic to slide
    const nextStep = () => {
        if (index < destinations.length - 1) setIndex(index + 1);
    };

    const prevStep = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <section className="py-24 px-6 overflow-hidden bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                {/* HEADER SECTION */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-[#2a6a62] font-bold text-xs uppercase tracking-widest">Top Destinations</span>
                        <h2 className="text-4xl font-bold text-slate-900 mt-2">Discover your love</h2>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link href="/services">
                            <Button variant="outline" className="border-slate-300 rounded-lg px-6 hover:bg-[#079d9a] hover:text-white transition-colors">See all</Button>
                        </Link>
                        {/* Custom Navigation Arrows */}
                        <div className="hidden md:flex gap-2">
                            <button onClick={prevStep} className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 disabled:opacity-30" disabled={index === 0}>
                                <ChevronLeft className="h-5 w-5 text-slate-600" />
                            </button>
                            <button onClick={nextStep} className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 disabled:opacity-30" disabled={index >= destinations.length - 1}>
                                <ChevronRight className="h-5 w-5 text-slate-600" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* SLIDER CONTAINER */}
                <div className="relative">
                    <motion.div
                        className="flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ right: 0, left: -((destinations.length - 1) * 300) }} // Estimated width
                        animate={{ x: `-${index * (window?.innerWidth < 768 ? 85 : 32)}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {destinations.map((item) => (
                            <motion.div
                                key={item.id}
                                className="min-w-[80%] md:min-w-[35%] lg:min-w-[30%] bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 p-3 md:p-4 pb-6 md:pb-8 flex-shrink-0"
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* IMAGE */}
                                <div className="relative h-64 md:h-72 w-full rounded-[2rem] overflow-hidden mb-4 md:mb-6">
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                </div>

                                {/* CONTENT */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 gap-2">
                                    <div>
                                        <h4 className="text-xl md:text-2xl font-bold text-[#1a3b3a] mb-1">{item.name}</h4>
                                        <div className="flex items-center gap-1 text-slate-400">
                                            <MapPin className="h-4 w-4" />
                                            <span className="text-xs md:text-sm font-medium">{item.country}</span>
                                        </div>
                                    </div>

                                    {/* AVATAR STACK */}
                                    <div className="flex -space-x-3">
                                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                                            <img src={`https://i.pravatar.cc/150?u=${item.id}`} className="object-cover" alt="user" />
                                        </div>
                                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                                            <img src={`https://i.pravatar.cc/150?u=${item.id + 10}`} className="object-cover" alt="user" />
                                        </div>
                                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white bg-[#ff7c7c] flex items-center justify-center text-white text-[10px] md:text-xs font-bold">
                                            +{item.visitors}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
