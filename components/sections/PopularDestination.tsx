import { MapPin, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";

const DESTINATIONS = [
    {
        title: "Pokhara, Nepal",
        desc: "The city of lakes and gateway to the Annapurna adventure.",

        img: "/pokhara.jpg",
        link: "/services?location=pokhara"
    },
    {
        title: "Manang Valley",
        desc: "High altitude desert landscape with ancient Tibetan culture.",

        img: "/Winter.jpeg",
        link: "/services?location=manang"
    },
    {
        title: "Kerala",
        desc: "The amazing jungle safari to experinence the wild.",

        img: "/kerala.jpg",
        link: "/services?location=rara"
    },
    {
        title: "Illam, Nepal",
        desc: "Lush green tea gardens and rolling hills in the far eastern Nepal.",

        img: "/Illam.jpg",
        link: "/services?location=illam"
    },
    {
        title: "Everest, Nepal",
        desc: "Stand at the top of the world with our exclusive trekking packages.",

        img: "/Namche-bazar.jpg",
        link: "/services?location=everest"
    },
    {
        title: "Upper Mustang, Nepal",
        desc: "Explore the forbidden kingdom and its mystic desert landscapes.",

        img: "/upper mustang.jpg",
        link: "/services?location=mustang"
    }
];

export default function PopularDestinations() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto w-full">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-[#2a6a62] font-bold uppercase tracking-[0.2em] text-sm mb-4">
                        Nepal Hotspots
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                        Popular <span className="text-slate-500 font-light italic">Destinations</span>
                    </h3>
                    <p className="text-slate-600 mt-4 max-w-lg">
                        Hand-picked luxury travel packages designed for the most discerning travelers around the globe.
                    </p>
                </div>
                <Link href="/services">
                    <Button variant="outline" className="border-[#2a6a62]/50 text-[#2a6a62]/80 hover:bg-[#2a6a62] hover:text-white rounded-full px-8 h-12 transition-all">
                        Explore All Packages <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>

            {/* 6-Card Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
                {DESTINATIONS.map((item) => (
                    <div key={item.title} className="flex flex-col gap-5">
                        <div
                            className="group relative overflow-hidden rounded-[3rem] bg-slate-900 border border-slate-100 aspect-[4/5] shadow-xl transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-3"
                        >
                            {/* Image Component */}
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-75 group-hover:opacity-100"
                            />

                            {/* Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />



                            {/* Content Bottom */}
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-8 md:right-8 transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="hidden md:flex items-center gap-1 md:gap-2 text-white mb-2 md:mb-3">
                                    <MapPin className="h-3 w-3 md:h-4 w-4" />
                                    <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Premium Package</span>
                                </div>

                                <h4 className="text-xl md:text-3xl font-bold mb-3 text-white tracking-tight">
                                    {item.title}
                                </h4>
                                <p className="hidden md:block text-gray-300 text-[10px] md:text-sm mb-3 md:mb-6 line-clamp-2 font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        <a
                            href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.waPhone}&text=${encodeURIComponent(`*Tour Inquiry*\n*Destination:* ${item.title}\n\nPlease provide more details and current pricing for this package.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button className="w-full bg-[#079d9a]/10 hover:bg-[#079d9a] text-[#079d9a] hover:text-white transition-all duration-300 rounded-xl md:rounded-2xl py-5 md:py-6 font-bold uppercase text-[10px] md:text-[11px] tracking-widest">
                                Contact Us
                            </Button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}