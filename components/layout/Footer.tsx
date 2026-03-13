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
                <div className="space-y-6">
                    <div className="text-2xl font-bold flex items-center">
                        JetSet<span className="h-2 w-2 bg-red-500 rounded-full ml-1 mb-4" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Nepal's premier travel and rental network. We connect adventure seekers with the most reliable flight packages and expert local transportation.
                    </p>
                    <div className="flex gap-3">
                        {[Instagram, Facebook].map((Icon, i) => (
                            <div key={i} className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#20544e] hover:border-[#20544e] transition-all cursor-pointer group">
                                <Icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                            </div>
                        ))}
                        {/* Custom TikTok Icon */}
                        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#20544e] hover:border-[#20544e] transition-all cursor-pointer group">
                            <svg className="h-5 w-5 fill-gray-400 group-hover:fill-white" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.44-.3 6.88-.45 10.32-.1 1.25-.45 2.49-1.21 3.52-.98 1.41-2.62 2.31-4.31 2.44-1.6.14-3.26-.2-4.59-1.12-1.32-.88-2.22-2.4-2.27-4-.07-2.52 1.48-4.93 3.82-5.88.36-.14.74-.23 1.12-.3v4.04c-.65.2-1.2.66-1.45 1.27-.37.79-.13 1.83.56 2.36.7.53 1.78.43 2.38-.2.53-.55.67-1.37.72-2.11.17-3.93.35-7.85.53-11.78-1.55 0-3.09-.01-4.64.01V.02h3.11z" />
                            </svg>
                        </div>
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
                            <span className="text-sm text-gray-300">Pokhara,<br />Nepal</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone className="h-5 w-5 text-[#2a6a62] shrink-0" />
                            <span className="text-sm text-gray-300">+977 9700040140</span>
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
                <p className="text-[14px] text-gray-600 uppercase tracking-widest">
                    © {new Date().getFullYear()}  Developed by Nirvaya Ligal
                </p>
            </div>
        </footer>
    );
}