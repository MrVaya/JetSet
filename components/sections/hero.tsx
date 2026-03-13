import Link from "next/link";
import { Search } from "lucide-react";
import HeroSearch from "./HeroSearch";

export default function Hero() {
    return (
        <section className="px-3 md:px-6 pt-24 md:pt-6">
            <div className="relative h-[65vh] md:h-[85vh] w-full rounded-3xl md:rounded-[3.5rem] overflow-hidden flex items-center justify-center">

                {/* 1. THE BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover"
                        alt="Hero Background"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* 2. THE CONTENT */}
                <div className="relative z-10 text-center text-white max-w-5xl px-4 flex flex-col items-center">

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-12 tracking-tight leading-tight">
                        Don't call it a dream. <br className="hidden md:block" /> Call it a plan
                    </h1>

                    {/* Mobile Only: Simple Search CTA */}
                    <div className="w-full md:hidden flex justify-center">
                        <Link href="/ticketing">
                            <button className="bg-[#079d9a] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest flex items-center gap-2 shadow-2xl">
                                <Search className="w-4 h-4" /> FIND A FLIGHT
                            </button>
                        </Link>
                    </div>

                    {/* 3. THE SEARCH BAR (Modular Component) hidden on mobile */}
                    <div className="w-full hidden md:block">
                        <HeroSearch />
                    </div>

                </div>
            </div>
        </section>
    );
}