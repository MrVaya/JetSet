"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/services" },
  { name: "Flights", href: "/ticketing" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScroll(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const shouldBeSolid = !isHome || isScrolled;

  return (


    <>
      <nav className={cn(
        "fixed left-0 right-0 z-[60] px-6 md:px-12 transition-all duration-300 ease-in-out top-0",
        shouldBeSolid
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-100 py-1 text-black"
          : "bg-transparent py-2 text-black"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/Jetset_logo.png"
              alt="JetSet Logo"
              width={400}
              height={100}
              className="h-14 md:h-16 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-100"
              priority
            />
          </Link>
          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-[#079d9a]",
                    isActive ? "text-[#079d9a] font-bold" : "text-black"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
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
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-bold p-3 rounded-xl transition-colors",
                        isActive
                          ? "bg-[#079d9a]/10 text-[#079d9a]"
                          : "text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
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
