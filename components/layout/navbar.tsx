"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  { name: "Discover", href: "/discover" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const isScrolled = useScroll(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (


    <>
      <nav className={cn(
        "fixed left-0 right-0 z-[60] px-6 md:px-12 transition-all duration-300 ease-in-out top-0",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-100 py-3 text-black"
          : "bg-transparent py-6 text-black"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center">
            JetSet <span className="h-2 w-2 bg-red-500 rounded-full ml-1 mb-4" />
          </Link>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/services">Packages</Link>
            <Link href="/ticketing">Flights</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900 z-[70]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar UI */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Mobile Sidebar Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[80] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)} 
            />

            {/* Mobile Sidebar */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white z-[90] md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-50">
                 <span className="text-xl font-bold text-slate-900">Menu</span>
                 <button 
                  className="p-2 hover:bg-slate-50 rounded-full transition-colors" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                   <X className="h-6 w-6 text-slate-900" />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-2">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-lg font-bold text-slate-900 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-lg font-bold text-slate-900 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  Packages
                </Link>
                <Link 
                  href="/ticketing" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-lg font-bold text-slate-900 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  Flights
                </Link>
                <Link 
                  href="/#about" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-lg font-bold text-slate-900 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  href="/#contact" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-lg font-bold text-slate-900 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Bottom Branding */}
              <div className="mt-auto p-8 text-center border-t border-slate-50">
                 <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">JetSet Travel © 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
