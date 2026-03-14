"use client";

import { AIRPORTS, PACKAGES, VEHICLES } from "@/libs/data";
import Image from "next/image";
import { Star, MapPin, Plane, Calendar, Users, Car, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { use } from "react";
import { cn } from "@/lib/utils";

export default function ServicesPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const params = use(searchParams);

    const isVehicle = params.type === "vehicle";
    const originCode = params.origin;
    const destCode = params.destination;
    const locationCode = params.location;
    const travelerCount = params.travelers || "1";

    // Filtering logic
    const filteredPackages = PACKAGES.filter(trip => {
        const matchesDest = !destCode || trip.to === destCode;
        const matchesOrigin = !originCode || trip.from === originCode;
        return matchesDest && matchesOrigin;
    });

    const filteredVehicles = VEHICLES.filter(v => {
        const matchesLocation = !locationCode || v.location === locationCode;
        return matchesLocation;
    }); 

    const displayItems = isVehicle ? filteredVehicles : filteredPackages;
    const title = isVehicle ? "Premium Vehicle Rentals" : "Available Travel Packages";
    const foundText = isVehicle ? "Vehicles Found" : "Packages Found";

    const updateType = (type: string) => {
        const url = new URL(window.location.href);
        if (type === "vehicle") {
            url.searchParams.set("type", "vehicle");
        } else {
            url.searchParams.delete("type");
        }
        window.history.pushState({}, '', url.toString());
        // Force a re-render or use router.push. Since this is "use client", we can use router.
    };

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
        <main className="min-h-screen bg-white pt-36 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Search Header Summary */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#079d9a]/5 border border-[#079d9a]/10 rounded-[2rem] p-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
                            <div className="flex flex-wrap gap-4 mt-2 text-slate-500 text-sm font-medium">
                                {isVehicle ? (
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#079d9a]" /> Pick-up: {locationCode ? AIRPORTS.find(a => a.id === locationCode)?.city : "Anywhere"}</span>
                                ) : (
                                    <>
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#079d9a]" /> {originCode ? AIRPORTS.find(a => a.id === originCode)?.city : "Anywhere"} to {destCode ? AIRPORTS.find(a => a.id === destCode)?.city : "Anywhere"}</span>
                                        <span className="flex items-center gap-1"><Users className="w-4 h-4 text-[#079d9a]" /> {travelerCount} Travelers</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* DESKTOP TOGGLE */}
                        <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                            <button 
                                onClick={() => {
                                    const newParams = new URLSearchParams(window.location.search);
                                    newParams.delete("type");
                                    window.location.search = newParams.toString();
                                }}
                                className={cn("px-6 py-2 rounded-lg text-xs font-bold transition-all", !isVehicle ? "bg-white text-[#079d9a] shadow-sm" : "text-slate-500 hover:text-slate-700")}
                            >
                                TRAVEL PACKAGES
                            </button>
                            <button 
                                onClick={() => {
                                    const newParams = new URLSearchParams(window.location.search);
                                    newParams.set("type", "vehicle");
                                    window.location.search = newParams.toString();
                                }}
                                className={cn("px-6 py-2 rounded-lg text-xs font-bold transition-all", isVehicle ? "bg-white text-[#079d9a] shadow-sm" : "text-slate-500 hover:text-slate-700")}
                            >
                                VEHICLE RENTALS
                            </button>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">{foundText}</p>
                        <p className="text-4xl font-black text-[#079d9a]">{displayItems.length}</p>
                    </div>
                </motion.div>

                {/* Results Grid */}
                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8"
                >
                    {displayItems.map((item: any) => (
                        <motion.div 
                            variants={itemAnim}
                            key={item.id} 
                            className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="relative h-40 md:h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={isVehicle ? item.name : item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {!isVehicle && (
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                                        <span className="text-xs font-bold text-slate-800">{item.rating}</span>
                                    </div>
                                )}
                                {isVehicle && (
                                    <div className="absolute top-4 right-4 bg-[#079d9a] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        {item.type}
                                    </div>
                                )}
                            </div>

                            <div className="p-4 md:p-8 flex flex-col flex-grow">
                                <div className="mb-2 md:mb-4">
                                    <h3 className="text-base md:text-xl font-black text-slate-900 line-clamp-2 leading-tight mb-1">
                                        {isVehicle ? item.name : item.title}
                                    </h3>
                                    <span className="text-base md:text-xl font-black text-[#079d9a]">{item.price}</span>
                                </div>

                                <p className="text-slate-500 text-[10px] md:text-sm mb-4 md:mb-6 leading-relaxed line-clamp-2">
                                    {isVehicle ? `${item.capacity} capacity with professional local driver.` : `${item.duration} Premium Package including luxury accommodation and local experiences.`}
                                </p>

                                <div className="mt-auto flex items-center justify-between pt-4 md:pt-6 border-t border-slate-50 gap-2">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-[#079d9a] transition-colors whitespace-nowrap">
                                                View Details
                                            </button>
                                        </DialogTrigger>
                                        {/* DialogContent remains the same */}
                                        <DialogContent className="max-w-2xl bg-white rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
                                            <div className="grid md:grid-cols-2 h-full">
                                                <div className="relative h-64 md:h-full">
                                                    <Image src={item.image} alt={isVehicle ? item.name : item.title} fill className="object-cover" />
                                                </div>
                                                <div className="p-8">
                                                    <DialogHeader>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="px-2 py-0.5 bg-[#079d9a]/10 text-[#079d9a] rounded text-[10px] font-bold uppercase tracking-widest">
                                                                {isVehicle ? item.type : "Global Hotspot"}
                                                            </span>
                                                        </div>
                                                        <DialogTitle className="text-2xl font-bold text-slate-900 mb-4">{isVehicle ? item.name : item.title}</DialogTitle>
                                                    </DialogHeader>
                                                    <div className="space-y-4 my-6">
                                                        <p className="text-sm text-slate-500 leading-relaxed">
                                                            {isVehicle 
                                                                ? "Experience comfortable travel across Nepal with our premium fleet. Reliable, safe, and professional."
                                                                : "Discover breathtaking landscapes and rich culture with our meticulously planned luxury tours."
                                                            }
                                                        </p>
                                                        <div className="grid grid-cols-1 gap-2">
                                                            {(isVehicle ? item.features : ["Luxury Stay", "Local Guide", "Flights Included", "Daily Breakfast"]).map((feat: string) => (
                                                                <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                                                    <CheckCircle2 className="h-4 w-4 text-[#079d9a]" />
                                                                    {feat}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                                        <span className="text-2xl font-black text-[#079d9a]">{item.price}</span>
                                                        <a
                                                            href={`https://api.whatsapp.com/send?phone=9779841743706&text=${encodeURIComponent(`*Booking Inquiry*\n*Item:* ${isVehicle ? item.name : item.title}\n*Price:* ${item.price}`)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Button className="bg-[#079d9a] hover:bg-[#068a87] text-white rounded-xl px-6 font-bold uppercase text-[10px] tracking-widest group">
                                                                Book This Now
                                                            </Button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>

                                    <a
                                        href={`https://api.whatsapp.com/send?phone=9779841743706&text=${encodeURIComponent(`*Booking Inquiry*\n*${isVehicle ? "Vehicle" : "Package"}:* ${isVehicle ? item.name : item.title}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <button className="bg-[#079d9a] text-white px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-black text-[9px] md:text-xs uppercase tracking-widest hover:bg-[#068a87] active:scale-95 transition-all shadow-lg shadow-[#079d9a]/20">
                                            Book Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {displayItems.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <h3 className="text-xl text-slate-400">No {isVehicle ? "vehicles" : "trips"} found matching your search. Try another destination!</h3>
                    </motion.div>
                )}
            </div>
        </main>
    );
}