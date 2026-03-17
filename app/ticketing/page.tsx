"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Plane, MapPin, Clock, ShieldCheck, ArrowRight, MessageSquare, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/data";

export default function TicketingPage() {
    return (
        <Suspense fallback={<LoadingState />}>
            <TicketingContent />
        </Suspense>
    );
}

function TicketingContent() {
    const searchParams = useSearchParams();
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");

    useEffect(() => {
        async function getFlights() {
            setLoading(true);
            try {
                const url = (origin && destination)
                    ? `/api/ticketing?origin=${origin}&destination=${destination}`
                    : `/api/ticketing`;

                const res = await fetch(url);
                const data = await res.json();
                setFlights(data);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        }
        getFlights();
    }, [origin, destination]);

    if (loading) return <LoadingState />;

    return (
        <main className="min-h-screen bg-[#F8FAFB] pt-24 md:pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#079d9a]/5 rounded-full blur-3xl -mr-32 md:-mr-64 -mt-16 md:-mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#2a6a62]/5 rounded-full blur-3xl -ml-32 md:-ml-64 -mb-16 md:-mb-32 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Hero Header */}
                <header className="mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm text-center md:text-left"
                    >
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-2 text-[#079d9a] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 py-1.5 px-4 bg-[#079d9a]/5 rounded-full">
                                <ShieldCheck className="w-3.5 h-3.5" /> Secure Flight Booking
                            </span>
                            <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                                {origin && destination ? (
                                    <>Discover Flights to <br /> <span className="text-[#079d9a]">{destination}</span></>
                                ) : (
                                    <>Explore Nepal's <br /> <span className="text-[#079d9a]">Luxury Routes</span></>
                                )}
                            </h1>
                            <p className="text-slate-500 mt-4 md:mt-6 text-base md:text-lg max-w-lg font-medium mx-auto md:mx-0">
                                Hand-picked connections for the most discerning travelers. Experience seamless journeys across the Himalayas.
                            </p>
                        </div>
                        <div className="hidden lg:block text-right">
                            <div className="bg-slate-900 text-white px-8 py-6 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#079d9a]/20 blur-2xl rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 relative z-10">Total Routes Found</p>
                                <p className="text-6xl font-black relative z-10">{flights.length}</p>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Search Result Legend */}
                {origin && destination && (
                    <div className="flex items-center gap-4 mb-8 px-4 opacity-60">
                        <div className="h-px flex-1 bg-slate-200" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">Showing best options for your route</span>
                        <div className="h-px flex-1 bg-slate-200" />
                    </div>
                )}

                {/* Flights List */}
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <AnimatePresence>
                        {flights.map((f: any, idx) => (
                            <motion.div
                                key={f.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group bg-white border border-slate-100 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-[#079d9a]/20 transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Decorative Gradient on Hover */}
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#079d9a] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />

                                {/* Airline Info */}
                                <div className="flex items-center gap-5 md:gap-6 min-w-0 md:min-w-[260px] w-full lg:w-auto">
                                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-[#F8FAFB] p-2.5 md:p-3 border border-slate-50 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500 overflow-hidden relative flex-shrink-0">
                                        <img src={f.logo} alt={f.airline} className="w-full h-full object-contain relative z-10" />
                                        <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-black text-slate-900 text-xl md:text-2xl uppercase tracking-tight leading-none mb-2 truncate">{f.airline}</h3>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-[9px] md:text-[10px] font-bold text-[#079d9a] uppercase tracking-widest px-2 py-0.5 bg-[#079d9a]/5 rounded-md border border-[#079d9a]/10">
                                                {f.aircraft}
                                            </span>
                                            <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                                <Briefcase className="w-3 h-3" /> Inc. 20kg
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Journey Visualization */}
                                <div className="flex-1 flex items-center justify-between w-full max-w-xl px-2 md:px-8 bg-slate-50/50 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                                    <div className="text-center md:text-left">
                                        <p className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter mb-1 leading-none">{f.departureTime}</p>
                                        <div className="flex flex-col items-center md:items-start leading-none">
                                            <p className="text-xs md:text-sm font-black text-[#079d9a] uppercase tracking-widest">{f.fromCode}</p>
                                            <p className="text-[8px] md:text-[9px] font-bold text-slate-300 uppercase tracking-tighter mt-1">Departs</p>
                                        </div>
                                    </div>

                                    <div className="flex-1 px-4 md:px-10 flex flex-col items-center relative min-w-[100px] md:min-w-[140px]">
                                        <div className="mb-2 px-3 py-1 bg-white md:bg-[#F8FAFB] border border-slate-100 rounded-full flex items-center gap-1 shadow-sm whitespace-nowrap">
                                            <Clock className="w-3 h-3 text-[#079d9a]" />
                                            <span className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-tight">{f.duration}</span>
                                        </div>

                                        <div className="w-full h-[2px] bg-slate-100 relative overflow-hidden rounded-full">
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#079d9a]/30 to-transparent"
                                            />
                                            <div className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-[#079d9a] -translate-y-1/2" />
                                            <div className="absolute top-1/2 right-0 w-1.5 h-1.5 rounded-full bg-[#079d9a] -translate-y-1/2" />
                                        </div>

                                        <div className="mt-2 flex items-center gap-1.5">
                                            <Plane className="w-3.5 h-3.5 text-[#079d9a] rotate-90" />
                                            <span className="text-[8px] md:text-[9px] font-black text-[#079d9a] uppercase tracking-widest whitespace-nowrap">{f.stops}</span>
                                        </div>
                                    </div>

                                    <div className="text-center md:text-right">
                                        <p className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter mb-1 leading-none">{f.arrivalTime}</p>
                                        <div className="flex flex-col items-center md:items-end leading-none">
                                            <p className="text-xs md:text-sm font-black text-[#079d9a] uppercase tracking-widest">{f.toCode}</p>
                                            <p className="text-[8px] md:text-[9px] font-bold text-slate-300 uppercase tracking-tighter mt-1">Arrives</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-center w-full lg:w-auto lg:pl-10 lg:border-l border-slate-50 pt-6 lg:pt-0 border-t lg:border-t-0 mt-2 lg:mt-0">
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.waPhone}&text=${encodeURIComponent(`*Elite Flight Booking*\n*Airline:* ${f.airline}\n*Flight:* ${f.aircraft}\n*Route:* ${f.fromCode} → ${f.toCode}\n*Time:* ${f.departureTime} - ${f.arrivalTime}\n\nI'd like to reserve a seat and verify current pricing.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <Button className="bg-[#079d9a] hover:bg-slate-900 text-white px-6 md:px-12 h-14 md:h-16 rounded-2xl md:rounded-[1.5rem] font-bold uppercase text-[10px] md:text-[11px] tracking-widest transition-all shadow-xl shadow-[#079d9a]/10 hover:shadow-[#079d9a]/20 group/btn whitespace-nowrap">
                                            Reserve Seat <ArrowRight className="ml-2 w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Footer Help */}
                <footer className="mt-16 md:mt-24 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 p-8 md:p-12 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Need a Custom Travel Solution?</h3>
                    <p className="text-slate-500 mb-8 md:mb-10 max-w-lg mx-auto text-sm md:text-base">Our specialists can arrange private charters, corporate group bookings, and premium lounge access globally.</p>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
                        <Button variant="outline" className="rounded-2xl border-slate-200 hover:border-[#079d9a] text-slate-600 h-12 md:h-14 px-6 md:px-8 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">
                            Charter Inquiry
                        </Button>
                        <Button variant="outline" className="rounded-2xl border-slate-200 hover:border-[#079d9a] text-slate-600 h-12 md:h-14 px-6 md:px-8 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">
                            Group Bookings
                        </Button>
                        <a href="/contact" className="w-full sm:w-auto">
                            <Button className="bg-slate-900 text-white rounded-2xl h-12 md:h-14 px-8 md:px-10 font-bold uppercase text-[9px] md:text-[10px] tracking-widest flex items-center justify-center gap-2 w-full">
                                <MessageSquare className="w-4 h-4" /> Expert Assistance
                            </Button>
                        </a>
                    </div>
                </footer>

            </div>
        </main>
    );
}

function LoadingState() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-[#F8FAFB] relative">
            <div className="relative">
                <div className="absolute inset-0 bg-[#079d9a] blur-3xl opacity-10 animate-pulse" />
                <Loader2 className="w-16 h-16 text-[#079d9a] animate-spin mb-6 relative z-10" />
                <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-[#079d9a] relative z-20" />
            </div>
            <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] animate-pulse">Scanning Premium Skies...</p>
        </div>
    );
}