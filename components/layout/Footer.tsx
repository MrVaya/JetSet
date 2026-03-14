import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Instagram,
    Facebook,
    MapPin,
    Phone,
    MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="bg-[#0a1118] text-white pt-20 pb-10 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* COLUMN 1: BRAND & SOCIAL */}
                <div className="flex flex-col items-start gap-4">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/Jetset_logo.png"
                            alt="JetSet Logo"
                            width={800}
                            height={50}
                            className="h-12 w-auto"
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-left">
                        We connect adventure seekers with the most reliable flight packages and expert local transportation.
                    </p>
                    <div className="flex gap-3">
                        {[Instagram, Facebook].map((Icon, i) => (
                            <div key={i} className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#20544e] hover:border-[#20544e] transition-all cursor-pointer group">
                                <Icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                            </div>
                        ))}
                        {/* Custom TikTok Icon */}

                    </div>
                </div>

                {/* COLUMN 2: EXPLORE */}
                <div className="space-y-6">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a6a62] to-[#20544e] font-bold uppercase tracking-widest text-xs">Explore</h4>
                    <ul className="space-y-4">
                        {[
                            { name: "Home", href: "/" },
                            { name: "Travel Packages", href: "/services" },
                            { name: "Flight Tickets", href: "/ticketing" }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-sm font-bold text-white hover:text-[#2a6a62] transition-colors uppercase tracking-tight">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* COLUMN 3: CONTACT */}
                <div className="space-y-6">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a6a62] to-[#20544e] font-bold uppercase tracking-widest text-xs">Contact</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3 items-start">
                            <MapPin className="h-5 w-5 text-[#2a6a62] shrink-0" />
                            <span className="text-sm text-gray-300">Kathmandu,<br />Nepal</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone className="h-5 w-5 text-[#2a6a62] shrink-0" />
                            <span className="text-sm text-gray-300">+977 9841743706</span>
                        </li>
                    </ul>
                </div>

                {/* COLUMN 4: INSTANT HELP */}
                <div className="space-y-6">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a6a62] to-[#20544e] font-bold uppercase tracking-widest text-xs">Instant Help</h4>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Have questions about your trip? Text us directly on WhatsApp for a fast response.
                        </p>
                        <Button className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white rounded-2xl flex gap-2 h-12 font-bold uppercase text-[11px] tracking-widest">
                            <MessageCircle className="h-4 w-4 fill-white" />
                            WhatsApp
                        </Button>
                    </div>
                </div>

            </div>

            {/* Copyright Notice */}
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
                <p className="text-[12px] text-gray-600 uppercase tracking-widest">
                    © {new Date().getFullYear()}  Developed by Nirvaya Ligal
                </p>
            </div>
        </footer>
    );
}