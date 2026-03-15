import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import HeroSearch from "./HeroSearch";

export default function Hero() {
    return (
        <section className="w-full">
            <div className="relative h-[80vh] md:h-[95vh] w-full overflow-hidden flex items-center justify-center">

                {/* 1. THE BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.avif" // Using the existing hero image
                        alt="Travel picture"
                        fill
                        priority                // Loads immediately
                        quality={100}           // Increases quality from default 75 to 100
                        sizes="100vw"           // Crucial: Tells Next.js this image takes the full screen

                        className="object-cover object-center hero-sharp"

                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* 2. THE CONTENT */}
                <div className="relative z-10 text-center text-white max-w-5xl px-6 flex flex-col items-center w-full">

                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-12 tracking-tight leading-tight break-words">
                        Don't call it a dream. <br className="hidden md:block" /> Call it a plan
                    </h1>

                    {/* Mobile Only: Simple Search CTA */}
                    <div className="w-full md:hidden flex justify-center px-4">
                        <Link href="/ticketing" className="w-full max-w-[280px]">
                            <button className="w-full bg-[#079d9a] text-white px-6 py-4 rounded-xl font-bold text-xs tracking-widest flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-transform">
                                <Search className="w-4 h-4" /> FIND A FLIGHT
                            </button>
                        </Link>
                    </div>

                    {/* 3. THE SEARCH BAR (Modular Component) hidden on mobile */}
                    <div className="w-full hidden md:block">
                        <React.Suspense fallback={<div className="h-32 bg-white/5 animate-pulse rounded-full" />}>
                            <HeroSearch />
                        </React.Suspense>
                    </div>

                </div>
            </div>
        </section>
    );
}