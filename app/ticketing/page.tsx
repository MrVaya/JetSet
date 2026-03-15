"use client";

import { AIRPORTS, FLIGHTS, Flight, SITE_CONFIG } from "@/lib/data";
import { Plane, Calendar, Users, MapPin, Clock, ArrowRight, ShieldCheck, Briefcase, Coffee, MessageCircle } from "lucide-react";
import Image from "next/image";
import React, { use, Suspense } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function TicketingContent({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const params = use(searchParams);

    // Extract data from URL
    const originCode = params.origin;
    const destCode = params.destination;
    const travelerCount = params.travelers || "1";
    const seatClass = params.class || "Economy";
    const dateStr = params.date ? new Date(params.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Any Date";

    // Filtering Logic
    const filteredFlights = FLIGHTS.filter(flight => {
        const matchesDest = !destCode || flight.toCode === destCode;
        const matchesOrigin = !originCode || flight.fromCode === originCode;
        return matchesDest && matchesOrigin;
    });

    const originCity = originCode ? AIRPORTS.find(a => a.id === originCode)?.city : "Anywhere";
    const destCity = destCode ? AIRPORTS.find(a => a.id === destCode)?.city : "Anywhere";

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemAnim = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen bg-slate-50/50 pt-36 pb-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">

                {/* Search Header Summary */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative overflow-hidden bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10 mb-8 md:mb-10"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#079d9a]/5 rounded-full -mr-10 -mt-10 md:-mr-20 md:-mt-20 blur-2xl md:blur-3xl" />
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#079d9a]/10 text-[#079d9a] rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4">
                                <Plane className="w-3 h-3" /> Results
                            </div>
                            <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3 md:mb-4 tracking-tight leading-tight">
                                {originCity} <span className="text-[#079d9a]">→</span> {destCity}
                            </h1>
                            <div className="flex flex-wrap gap-3 md:gap-6 text-slate-500 text-[10px] md:text-sm font-bold">
                                <span className="flex items-center gap-1.5 md:gap-2 bg-slate-50 px-3 md:px-4 py-1.5 md:py-2 rounded-xl border border-slate-100"><Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#079d9a]" /> {dateStr}</span>
                                <span className="flex items-center gap-1.5 md:gap-2 bg-slate-50 px-3 md:px-4 py-1.5 md:py-2 rounded-xl border border-slate-100"><Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#079d9a]" /> {travelerCount}</span>
                                <span className="flex items-center gap-1.5 md:gap-2 bg-slate-50 px-3 md:px-4 py-1.5 md:py-2 rounded-xl border border-slate-100"><ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#079d9a]" /> {seatClass}</span>
                            </div>
                        </div>
                        <div className="hidden md:block text-right">
                            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Found Deals</p>
                            <p className="text-6xl font-black text-[#079d9a]">{filteredFlights.length}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Desktop Sorting Bar */}
                {filteredFlights.length > 0 && (
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 px-2 md:px-4 gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#079d9a] animate-pulse" />
                            <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{filteredFlights.length} Flights Found</span>
                        </div>

                    </div>
                )}

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-4 md:space-y-6"
                >
                    {filteredFlights.map((flight: Flight) => (
                        <motion.div
                            variants={itemAnim}
                            key={flight.id}
                            className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#079d9a]/20 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-10">
                                {/* Airline Branding */}
                                <div className="flex-shrink-0 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-slate-50 pb-4 md:pb-6 lg:pb-0 lg:pr-10">
                                    <div className="w-16 h-16 md:w-28 md:h-28 rounded-xl md:rounded-2xl bg-white shadow-inner flex items-center justify-center border border-slate-100 p-2 group-hover:scale-105 transition-transform duration-500">
                                        <Image
                                            src={flight.logo || "/Jetset_logo.png"}
                                            alt={flight.airline}
                                            width={150}
                                            height={150}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-base md:text-lg font-black text-slate-900 tracking-tight">{flight.airline}</p>
                                        <p className="text-[9px] md:text-[10px] font-bold text-[#079d9a] uppercase tracking-widest">{flight.aircraft}</p>
                                    </div>
                                </div>

                                {/* Main Flight Logic */}
                                <div className="flex-grow flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-16">
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-[80px]">
                                        <p className="text-2xl md:text-3xl font-black text-slate-900">{flight.departureTime}</p>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">{flight.fromCode}</span>
                                            <span className="text-[9px] md:text-[10px] font-bold text-slate-400 truncate max-w-[80px] md:max-w-[100px]">{AIRPORTS.find(a => a.id === flight.fromCode)?.city}</span>
                                        </div>
                                    </div>

                                    {/* Advanced Timeline */}
                                    <div className="flex-grow flex flex-col items-center max-w-[300px] w-full relative py-2">
                                        <span className="text-[9px] md:text-[10px] font-bold text-slate-400 mb-2 md:mb-3 bg-slate-50 px-2 md:px-3 py-1 rounded-full">{flight.duration}</span>
                                        <div className="w-full relative h-[2px] md:h-[3px] bg-slate-100 rounded-full">
                                            <div className="absolute top-1/2 left-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-200 border-2 border-white -translate-y-1/2" />
                                            <div className="absolute top-1/2 right-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-200 border-2 border-white -translate-y-1/2" />
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-slate-100 via-[#079d9a]/40 to-slate-100 rounded-full"
                                            />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-full border border-slate-50 shadow-sm">
                                                <Plane className="w-3 h-3 md:w-4 md:h-4 text-[#079d9a] transform rotate-90" />
                                            </div>
                                        </div>
                                        <span className="text-[8px] md:text-[9px] font-bold text-emerald-500 mt-2 md:mt-3 uppercase tracking-[0.2em]">{flight.stops}</span>
                                    </div>

                                    <div className="flex flex-col items-center sm:items-end text-center sm:text-right min-w-[80px]">
                                        <p className="text-2xl md:text-3xl font-black text-slate-900">{flight.arrivalTime}</p>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">{flight.toCode}</span>
                                            <span className="text-[9px] md:text-[10px] font-bold text-slate-400 truncate max-w-[80px] md:max-w-[100px]">{AIRPORTS.find(a => a.id === flight.toCode)?.city}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action & Price Section */}
                                <div className="flex-shrink-0 lg:border-l lg:border-slate-50 pt-4 md:pt-6 lg:pt-0 lg:pl-10 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 md:gap-6 min-w-full sm:min-w-[180px]">
                                    <div className="text-left lg:text-right">
                                        <p className="text-[8px] md:text-[10px] uppercase font-bold text-slate-300 tracking-[0.2em] mb-0.5 md:mb-1">Current Fare</p>
                                        <p className="text-sm font-bold text-[#079d9a] uppercase tracking-widest bg-[#079d9a]/5 px-2 py-1 rounded">Check Availability</p>
                                    </div>
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.waPhone}&text=${encodeURIComponent(`*Flight Inquiry*\n*Airline:* ${flight.airline}\n*Route:* ${flight.fromCode} → ${flight.toCode}\n*Date:* ${dateStr}\n\nPlease check availability and provide current fare.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-grow sm:flex-grow-0"
                                    >
                                        <button className="w-full bg-[#079d9a] hover:bg-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl shadow-[#079d9a]/20 hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2">
                                            <MessageCircle className="w-4 h-4 fill-white/20" /> Check on WhatsApp
                                        </button>
                                    </a>
                                </div>
                            </div>

                            {/* Extra Perks */}
                            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-50 flex flex-wrap gap-2 md:gap-4 text-[8px] md:text-[10px] font-bold text-slate-400">
                                <div className="flex items-center gap-1.5 bg-slate-50 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-slate-100">
                                    <Briefcase className="w-3 h-3 text-[#079d9a]" /> 25KG BAGGAGE
                                </div>
                                <div className="flex items-center gap-1.5 bg-slate-50 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-slate-100">
                                    <Coffee className="w-3 h-3 text-[#079d9a]" /> SNACK
                                </div>
                                <div className="flex items-center gap-1.5 bg-slate-50 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-slate-100">
                                    <ShieldCheck className="w-3 h-3 text-[#079d9a]" /> REFUNDABLE
                                </div>
                                <div className="hidden sm:flex items-center gap-1.5 ml-auto text-emerald-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 anim-pulse" /> INSTANT CONFIRMATION
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Empty State */}
                    {filteredFlights.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-100"
                        >
                            <div className="w-24 h-24 bg-[#079d9a]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Plane className="w-10 h-10 text-[#079d9a] transform -rotate-45" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">Sky is clear!</h3>
                            <p className="text-slate-500 max-w-xs mx-auto text-sm font-medium">We couldn't find any flights for this specific route. Try changing your departure or destination.</p>
                            <button
                                onClick={() => window.location.href = "/"}
                                className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#079d9a] transition-colors"
                            >
                                Back to Search
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}

export default function TicketingPage(props: any) {
    return (
        <Suspense fallback={<div className="min-h-screen pt-36 px-6 max-w-6xl mx-auto"><div className="h-64 bg-white animate-pulse rounded-[2.5rem]" /></div>}>
            <TicketingContent {...props} />
        </Suspense>
    );
}
