"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
    {
        id: 0,
        name: "Aayam Shrestha ",
        text: '"Memories of a lifetime" Thank you for finding our dream honeymoon spot. The service was impeccable , We Loved it',
    },
    {
        id: 1,
        name: "Anny Stack",
        text: '"Excellence in every mile" The attention to detail in their flight packages is unmatched. I felt like a VIP from takeoff to landing.',
    },
    {
        id: 2,
        name: "Sabin Rai",
        text: 'Really appreciate the help and support from the staff during my trips. Very helpful.',
    },
    {
        id: 3,
        name: "Charlotte Flare",
        text: 'The  transportation was the highlight. The SUV was brand new and the driver was extremely professional.',
    },
    {
        id: 4,
        name: "Sarah Jenkins",
        text: 'I never thought booking a flight in Nepal could be this stress-free. JetSet handled everything.',
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const next = () => setActive((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    const prev = () => setActive((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

    return (
        // Section is w-full and has no horizontal padding
        <section className="w-full relative py-12 px-0 bg-white">
            {/* The main container now spans full width but has rounded edges if you prefer the "floating" design, 
          or remove rounded-none for a true edge-to-edge cinematic look */}
            <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden flex flex-col items-center justify-center text-center">

                {/* BACKGROUND IMAGE - Spans 100% of viewport */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/testimonial.jpg"
                        alt="Beach Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Professional Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80 backdrop-blur-[1px]" />
                </div>

                {/* CONTENT LAYER */}
                <div className="relative z-10 w-full max-w-4xl px-6">
                    <span className="text-[#82a8bb] font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        What they say about us
                    </h2>

                    {/* Stars */}
                    <div className="flex justify-center gap-1.5 mb-10">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#ff7c1c] text-[#ff7c1c]" />
                        ))}
                    </div>

                    {/* Quote & Name Transition */}
                    <div className="min-h-[160px] flex flex-col justify-center mb-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                            >
                                <p className="text-white/80 text-lg md:text-2xl font-light italic leading-relaxed mb-6 max-w-2xl mx-auto">
                                    {TESTIMONIALS[active].text}
                                </p>
                                <h4 className="text-2xl font-extrabold text-white tracking-tight uppercase">
                                    {TESTIMONIALS[active].name}
                                </h4>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Modern Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-12">
                        {TESTIMONIALS.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActive(idx)}
                                className={`cursor-pointer transition-all duration-500 ${active === idx
                                    ? "w-10 h-1.5 bg-[#ff7c1c] rounded-full"
                                    : "w-2 h-1.5 bg-white/20 rounded-full hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating Side Controls */}
                <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 md:px-12 pointer-events-none z-30">
                    <button
                        onClick={prev}
                        className="pointer-events-auto p-2 md:p-4 text-white/30 hover:text-white transition-all transform hover:scale-110 active:scale-95 bg-black/20 md:bg-transparent rounded-full backdrop-blur-sm md:backdrop-blur-none"
                        aria-label="Previous Testimonial"
                    >
                        <ChevronLeft className="w-8 h-8 md:w-16 md:h-16 stroke-[1.5px]" />
                    </button>
                    <button
                        onClick={next}
                        className="pointer-events-auto p-2 md:p-4 text-[#ff7c1c] hover:text-[#ff9d54] transition-all transform hover:scale-110 active:scale-95 bg-black/20 md:bg-transparent rounded-full backdrop-blur-sm md:backdrop-blur-none"
                        aria-label="Next Testimonial"
                    >
                        <ChevronRight className="w-8 h-8 md:w-16 md:h-16 stroke-[1.5px]" />
                    </button>
                </div>

            </div>
        </section>
    );
}