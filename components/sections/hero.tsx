"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import HeroSearch from "./HeroSearch";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.15]);

    const titleWords = "Don't call it a dream. Call it a plan".split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child: any = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section className="w-full">
            <div className="relative h-[80vh] md:h-[95vh] w-full overflow-hidden flex items-center justify-center">

                {/* 1. THE BACKGROUND IMAGE with Parallax Zoom */}
                <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="Travel picture"
                        fill
                        priority
                        quality={100}
                        sizes="100vw"
                        className="object-cover object-center hero-sharp"
                    />
                    <div className="absolute inset-0 bg-black/35" />

                    {/* Premium Aurora Glows */}
                    <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#079d9a]/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                    <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/10 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />
                </motion.div>

                {/* 2. THE CONTENT */}
                <div className="relative z-10 text-center text-white max-w-6xl px-6 flex flex-col items-center w-full pt-16 md:pt-0">

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap justify-center mb-8 md:mb-12"
                    >
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={child}
                                className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight inline-block"
                                style={{
                                    textShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                    filter: "drop-shadow(0 5px 15px rgba(0,0,0,0.2))"
                                }}
                            >
                                {word}&nbsp;
                                {index === 4 ? <br className="hidden md:block" /> : null}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Mobile Only: Simple Search CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="w-full md:hidden flex justify-center px-4"
                    >
                        <Link href="/ticketing" className="w-full max-w-[280px]">
                            <button className="w-full bg-[#079d9a] text-white px-6 py-4 rounded-2xl font-bold text-[11px] tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(7,157,154,0.3)] active:scale-95 transition-all">
                                <Search className="w-5 h-5" /> FIND A FLIGHT
                            </button>
                        </Link>
                    </motion.div>

                    {/* 3. THE SEARCH BAR with Floating Entrance */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full hidden md:block"
                    >
                        <React.Suspense fallback={<div className="h-32 bg-white/5 animate-pulse rounded-full" />}>
                            <HeroSearch />
                        </React.Suspense>
                    </motion.div>

                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[5]" />
            </div>
        </section>
    );
}
