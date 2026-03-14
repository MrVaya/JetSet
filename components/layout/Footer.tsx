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
        <footer className="bg-[#0a1118] text-white pt-16 pb-8 md:pt-20 md:pb-10 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center md:items-start md:text-left gap-12 md:gap-0 md:grid md:grid-cols-4">

                {/* COLUMN 1: BRAND & SOCIAL */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                        <Image
                            src="/Jetset_logo.png"
                            alt="JetSet Logo"
                            width={200}
                            height={50}
                            className="h-10 md:h-12 w-auto"
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] md:max-w-xs">
                        Connecting adventure seekers with reliable flights and expert local transportation across Nepal.
                    </p>
                    <div className="flex gap-4">
                        {[
                            { Icon: Facebook, href: "https://www.facebook.com/Jetsetholiday/" },
                            { Icon: Instagram, href: "https://www.instagram.com/jetsetholidays36" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-11 w-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#079d9a] hover:border-[#079d9a] transition-all cursor-pointer group"
                            >
                                <social.Icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* COLUMN 2: EXPLORE */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] opacity-50">Explore</h4>
                    <ul className="flex flex-col items-center md:items-start gap-4">
                        {[
                            { name: "Home", href: "/" },
                            { name: "Travel Packages", href: "/services" },
                            { name: "Flight Tickets", href: "/ticketing" }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-sm font-bold text-gray-300 hover:text-[#079d9a] transition-colors uppercase tracking-tight">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* COLUMN 3: CONTACT */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] opacity-50">Contact</h4>
                    <ul className="flex flex-col items-center md:items-start gap-5">
                        <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                            <MapPin className="h-5 w-5 text-[#079d9a] hidden md:block" />
                            <span className="text-sm text-gray-300">Kathmandu, Nepal</span>
                        </li>
                        <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                            <Phone className="h-5 w-5 text-[#079d9a] hidden md:block" />
                            <span className="text-sm text-gray-300 font-bold">+977 9841743706</span>
                        </li>
                    </ul>
                </div>

                {/* COLUMN 4: INSTANT HELP */}
                <div className="w-full max-w-[320px] md:max-w-none">
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 space-y-5 text-center md:text-left backdrop-blur-sm">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#079d9a]/10 text-[#079d9a] rounded-full text-[10px] font-bold uppercase tracking-widest mx-auto md:mx-0">
                            <MessageCircle className="w-3 h-3" /> 24/7 Support
                        </div>
                        <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                            Need a custom itinerary or help with bookings? Our travel experts are ready.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=9779841743706&text=Hello%20JetSet%20Holidays!%20I%20would%20like%20to%20inquire%20about%20your%20travel%20packages%20and%20flights."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <Button className="w-full bg-[#079d9a] hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center gap-2 h-12 font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-[#079d9a]/20">
                                WhatsApp Us
                            </Button>
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright Notice */}
            <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-left">
                    © {new Date().getFullYear()} JetSet Holidays
                </p>
                <div className="flex gap-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                    • Developed by Nirvaya Ligal
                </div>
            </div>
        </footer>
    );
}