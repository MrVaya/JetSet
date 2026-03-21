"use client";

import { AIRPORTS, PACKAGES, VEHICLES, Package, Vehicle, SITE_CONFIG } from "@/lib/data";
import Image from "next/image";
import { Star, MapPin, Plane, Calendar, Users, Car, CheckCircle2, Search, SlidersHorizontal, ArrowRight, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { Suspense } from "react";

/* ─── Brand tokens ─────────────────────────────────────── */
const T = {
    teal: "#079d9a",
    tealDark: "#057a78",
    tealGlow: "rgba(7,157,154,0.10)",
    tealBorder: "rgba(7,157,154,0.20)",
    navy: "#0d1420",
    bg: "#f0f6f6",
    white: "#ffffff",
    slate50: "#f8fafc",
    slate100: "#f1f5f9",
    slate200: "#e2e8f0",
    slate400: "#94a3b8",
    slate500: "#64748b",
    slate700: "#334155",
    slate900: "#0f172a",
    border: "#e2ecec",
};

/* ─── Animation variants ───────────────────────────────── */
const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const itemAnim: any = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─── Helpers (identical logic, just extracted cleanly) ── */
function getTitle(item: Package | Vehicle) {
    return "name" in item ? item.name : item.title;
}
function getFeatures(item: Package | Vehicle): string[] {
    return "features" in item && Array.isArray(item.features)
        ? item.features
        : ["Luxury Stay", "Local Guide", "Flights Included", "Daily Breakfast"];
}
function getBadge(item: Package | Vehicle) {
    return "type" in item ? item.type : "Global Hotspot";
}

/* ══════════════════════════════════════════════════════════
   SERVICES CONTENT
══════════════════════════════════════════════════════════ */
function ServicesContent({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const params = React.use(searchParams);

    const isVehicle = params.type === "vehicle";
    const originCode = params.origin;
    const destCode = params.destination;
    const locationCode = params.location;
    const travelerCount = params.travelers || "1";

    /* ── Same filtering logic as before ── */
    const filteredPackages = PACKAGES.filter((trip) => {
        const matchesDest = !destCode || trip.to === destCode;
        const matchesOrigin = !originCode || trip.from === originCode;
        return matchesDest && matchesOrigin;
    });

    const filteredVehicles = VEHICLES.filter((v) => {
        const matchesLocation = !locationCode || v.location === locationCode;
        return matchesLocation;
    });

    const displayItems = isVehicle ? filteredVehicles : filteredPackages;
    const title = isVehicle ? "Premium Vehicle Rentals" : "Available Travel Packages";
    const foundText = isVehicle ? "Vehicles Found" : "Packages Found";

    const originCity = originCode ? AIRPORTS.find((a) => a.id === originCode)?.city : null;
    const destCity = destCode ? AIRPORTS.find((a) => a.id === destCode)?.city : null;
    const locationCity = locationCode ? AIRPORTS.find((a) => a.id === locationCode)?.city : null;

    return (
        <main style={{ minHeight: "100vh", background: T.bg, fontFamily: "'Plus Jakarta Sans', sans-serif", color: T.slate900 }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        /* ── Card ── */
        .svc-card { 
          background: ${T.white}; 
          border-radius: 1.5rem; 
          border: 1px solid ${T.border}; 
          overflow: hidden; 
          display: flex; 
          flex-direction: column; 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
          position: relative;
        }
        .svc-card:hover { 
          box-shadow: 0 20px 48px rgba(7,157,154,0.18); 
          transform: translateY(-8px); 
          border-color: ${T.teal} !important; 
        }

        /* ── Image zoom ── */
        .svc-card .img-wrap img { transition: transform .7s cubic-bezier(.16,1,.3,1) !important; }
        .svc-card:hover .img-wrap img { transform: scale(1.1) !important; }

        /* ── Tag pill ── */
        .tag { display:inline-flex; align-items:center; padding:3px 10px; border-radius:100px; font-size:9px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; background:rgba(7,157,154,0.08); color:${T.teal}; border:1px solid rgba(7,157,154,0.15); }

        /* ── WA Button ── */
        .wa-btn { 
          display:inline-flex; 
          align-items:center; 
          gap:6px; 
          background:${T.teal}; 
          color:white; 
          border:none; 
          border-radius:12px; 
          padding:10px 20px; 
          font-family:'Plus Jakarta Sans',sans-serif; 
          font-size:11px; 
          font-weight:700; 
          letter-spacing:.1em; 
          text-transform:uppercase; 
          cursor:pointer; 
          transition:all .3s cubic-bezier(0.4, 0, 0.2, 1); 
          white-space:nowrap; 
        }
        .wa-btn:hover { 
          background:${T.tealDark}; 
          transform:translateY(-2px); 
          box-shadow:0 8px 25px rgba(7,157,154,0.35); 
        }

        /* ── Ghost btn ── */
        .ghost-btn { 
          display:inline-flex; 
          align-items:center; 
          gap:6px; 
          background:transparent; 
          color:${T.slate500}; 
          border:none; 
          padding:0; 
          font-family:'Plus Jakarta Sans',sans-serif; 
          font-size:10px; 
          font-weight:700; 
          letter-spacing:.12em; 
          text-transform:uppercase; 
          cursor:pointer; 
          transition:all .2s; 
        }
        .ghost-btn:hover { color:${T.teal}; padding-left: 4px; }

        /* ── Pulse dot ── */
        @keyframes pulse-dot { 
          0%, 100% { transform: scale(1); opacity: 1; } 
          50% { transform: scale(0.8); opacity: 0.5; } 
        }
        .pulse-dot { 
          animation: pulse-dot 2s ease-in-out infinite; 
          width: 6px; 
          height: 6px; 
          border-radius: 50%; 
          background: ${T.teal}; 
          display: inline-block; 
        }

        /* ── Dialog layout ── */
        .dialog-grid { display:grid; grid-template-columns:1fr 1fr; height:100%; }
        @media(max-width:640px) { .dialog-grid { grid-template-columns:1fr; } }

        /* ── Feature row ── */
        .feat-row { display:flex; align-items:center; gap:10px; font-size:13px; font-weight:600; color:${T.slate700}; background:${T.slate50}; border:1px solid ${T.slate100}; border-radius:12px; padding:12px 14px; }

        /* ── Empty state ── */
        .empty-state { text-align:center; padding:80px 20px; }

        /* ── Responsive grid ── */
        .results-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        @media(max-width:1200px) { .results-grid { grid-template-columns:repeat(3,1fr); } }
        @media(max-width:768px)  { .results-grid { grid-template-columns:repeat(2,1fr); gap:14px; } }
        @media(max-width:480px)  { .results-grid { grid-template-columns:1fr; } }

        /* ── Header summary ── */
        .header-summary { background:${T.white}; border:1px solid ${T.border}; border-radius:1.5rem; padding:28px 32px; margin-bottom:36px; display:flex; justify-content:space-between; align-items:center; gap:20px; flex-wrap:wrap; }

        /* ── Breadcrumb ── */
        .bc { font-size:11px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:${T.slate400}; display:flex; align-items:center; gap:6px; margin-bottom:20px; }
        .bc a { color:${T.slate400}; text-decoration:none; transition:color .18s; } .bc a:hover { color:${T.teal}; }

        /* ── Scroll-reveal pulse on count ── */
        @keyframes countpop { 0%{transform:scale(.85);opacity:0} 100%{transform:scale(1);opacity:1} }
        .count-pop { animation: countpop .5s cubic-bezier(.16,1,.3,1) forwards; }

        /* ── Top accent line on cards ── */
        .card-accent { height:3px; background:linear-gradient(to right,${T.teal},transparent); }
      `}</style>

            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px" }}>

                {/* ── Breadcrumb ── */}
                <div className="bc">
                    <a href="/">Home</a>
                    <span>›</span>
                    <a href="/services">Services</a>
                    <span>›</span>
                    <span style={{ color: T.teal }}>{isVehicle ? "Vehicle Rentals" : "Travel Packages"}</span>
                </div>

                {/* ══════════════════════════════════════════
            HEADER SUMMARY — same data, new design
        ══════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="header-summary"
                >
                    {/* Left: title + filters */}
                    <div style={{ flex: 1 }}>
                        {/* Mode tabs */}


                        <h1 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.035em", color: T.slate900, marginBottom: "10px", lineHeight: 1.1 }}>
                            {title}
                        </h1>

                        {/* Active filter chips */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
                            {isVehicle ? (
                                <FilterChip icon={<MapPin style={{ width: 12, height: 12 }} />} label={locationCity ? `Pick-up: ${locationCity}` : "All Locations"} />
                            ) : (
                                <>
                                    {(originCity || destCity) && (
                                        <FilterChip
                                            icon={<Plane style={{ width: 12, height: 12 }} />}
                                            label={`${originCity ?? "Anywhere"} → ${destCity ?? "Anywhere"}`}
                                        />
                                    )}
                                    <FilterChip
                                        icon={<Users style={{ width: 12, height: 12 }} />}
                                        label={`${travelerCount} Traveler${Number(travelerCount) > 1 ? "s" : ""}`}
                                    />
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right: count */}
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ background: T.navy, borderRadius: "16px", padding: "20px 28px", minWidth: "140px" }}>
                            <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "4px" }}>{foundText}</p>
                            <p className="count-pop" style={{ fontSize: "3rem", fontWeight: 900, color: T.teal, lineHeight: 1, letterSpacing: "-0.04em" }}>{displayItems.length}</p>
                        </div>
                    </div>
                </motion.div>

                {/* ══════════════════════════════════════════
            RESULTS GRID
        ══════════════════════════════════════════ */}
                {displayItems.length > 0 ? (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="results-grid"
                    >
                        {displayItems.map((item: Package | Vehicle) => (
                            <motion.div key={item.id} variants={itemAnim} className="svc-card">

                                {/* Teal top accent */}
                                <div className="card-accent" />

                                {/* Image */}
                                <div className="img-wrap" style={{ position: "relative", height: "180px", overflow: "hidden", flexShrink: 0 }}>
                                    <Image
                                        src={item.image}
                                        alt={getTitle(item)}
                                        fill
                                        sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                                        style={{ objectFit: "cover" }}
                                    />

                                    {/* Rating badge */}
                                    {!isVehicle && "rating" in item && (
                                        <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderRadius: "100px", padding: "4px 10px", display: "flex", alignItems: "center", gap: "4px" }}>
                                            <Star style={{ width: 11, height: 11, color: "#f97316", fill: "#f97316" }} />
                                            <span style={{ fontSize: "11px", fontWeight: 800, color: T.slate900 }}>{"rating" in item ? item.rating : ""}</span>
                                        </div>
                                    )}

                                    {/* Vehicle type */}
                                    {isVehicle && "type" in item && (
                                        <div style={{ position: "absolute", top: "12px", right: "12px", background: T.teal, color: "white", borderRadius: "100px", padding: "4px 12px", fontSize: "9px", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>
                                            {"type" in item ? item.type : ""}
                                        </div>
                                    )}
                                </div>

                                {/* Body */}
                                <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                                        <div style={{ display: "flex", gap: "6px" }}>
                                            <span className="tag">Best Price</span>
                                            <span className="tag">Guaranteed</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <span className="pulse-dot" />
                                            <span style={{ fontSize: "9px", fontWeight: 700, color: T.teal, letterSpacing: "0.05em" }}>LIVE</span>
                                        </div>
                                    </div>

                                    <h3 style={{ fontSize: "15px", fontWeight: 800, color: T.slate900, lineHeight: 1.3, marginBottom: "8px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                        {getTitle(item)}
                                    </h3>

                                    <p style={{ fontSize: "12px", color: T.slate500, lineHeight: 1.65, marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                        {"capacity" in item
                                            ? `${item.capacity} capacity with professional local driver.`
                                            : `${"duration" in item ? item.duration : ""} Premium package including luxury accommodation.`}
                                    </p>

                                    {/* Footer */}
                                    <div style={{ marginTop: "auto", paddingTop: "14px", borderTop: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>

                                        {/* Detail dialog — using your exact existing Dialog */}
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button className="ghost-btn">
                                                    View Details <ArrowRight style={{ width: 11, height: 11 }} />
                                                </button>
                                            </DialogTrigger>

                                            <DialogContent className="sm:max-w-4xl max-w-[95vw] p-0 overflow-hidden border-none shadow-2xl" style={{ borderRadius: "1.5rem" }}>
                                                <div className="dialog-grid">
                                                    {/* Image side */}
                                                    <div style={{ position: "relative", minHeight: "280px" }}>
                                                        <Image src={item.image} alt={getTitle(item)} fill style={{ objectFit: "cover" }} />
                                                        {/* Gradient overlay */}
                                                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,20,32,0.6) 0%, transparent 60%)" }} />
                                                        {/* Badge on image */}
                                                        <div style={{ position: "absolute", bottom: "20px", left: "20px", background: T.teal, color: "white", borderRadius: "100px", padding: "5px 14px", fontSize: "10px", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>
                                                            {getBadge(item)}
                                                        </div>
                                                    </div>

                                                    {/* Content side */}
                                                    <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", background: T.white }}>
                                                        <DialogHeader style={{ marginBottom: "20px" }}>
                                                            <DialogTitle style={{ fontSize: "24px", fontWeight: 900, color: T.slate900, lineHeight: 1.2, letterSpacing: "-0.025em" }}>
                                                                {getTitle(item)}
                                                            </DialogTitle>
                                                        </DialogHeader>

                                                        <p style={{ fontSize: "14px", color: T.slate500, lineHeight: 1.7, marginBottom: "24px" }}>
                                                            {isVehicle
                                                                ? "Experience comfortable travel across Nepal with our premium fleet. Reliable, safe, and professional."
                                                                : "Discover breathtaking landscapes and rich culture with our meticulously planned luxury tours."}
                                                        </p>

                                                        {/* Features grid */}
                                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
                                                            {getFeatures(item).map((feat: string) => (
                                                                <div key={feat} className="feat-row">
                                                                    <CheckCircle2 style={{ width: 15, height: 15, color: T.teal, flexShrink: 0 }} />
                                                                    {feat}
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Dialog footer */}
                                                        <div style={{ marginTop: "auto", paddingTop: "20px", borderTop: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                            <div>
                                                                <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase", color: T.slate400, marginBottom: "2px" }}>Starting from</p>
                                                                <p style={{ fontSize: "13px", fontWeight: 600, color: T.slate500 }}>Contact us for pricing</p>
                                                            </div>

                                                            <a
                                                                href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.waPhone}&text=${encodeURIComponent(`*Price Inquiry*\n*Item:* ${getTitle(item)}\n\nPlease provide the current price and availability.`)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {/* Your original Button component */}
                                                                <Button className="bg-[#079d9a] hover:bg-[#068a87] text-white rounded-xl px-7 h-11 font-bold uppercase text-[11px] tracking-widest shadow-lg shadow-[#079d9a]/20 transition-all hover:scale-105 active:scale-95">
                                                                    Enquire Now
                                                                </Button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>

                                        {/* Book CTA */}
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.waPhone}&text=${encodeURIComponent(`*Booking Inquiry*\n*${isVehicle ? "Vehicle" : "Package"}:* ${getTitle(item)}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="wa-btn">
                                                <MessageCircle style={{ width: 13, height: 13 }} />
                                                Book
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    /* ── Empty State ── */
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="empty-state">
                        <div style={{ width: "72px", height: "72px", borderRadius: "20px", background: T.bg, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                            <Search style={{ width: 28, height: 28, color: T.slate400 }} />
                        </div>
                        <h3 style={{ fontSize: "20px", fontWeight: 700, color: T.slate700, marginBottom: "8px" }}>
                            No {isVehicle ? "vehicles" : "packages"} found
                        </h3>
                        <p style={{ fontSize: "14px", color: T.slate400, marginBottom: "24px" }}>
                            Try adjusting your search — or browse everything below.
                        </p>
                        <a href={isVehicle ? "?type=vehicle" : "?type=package"} style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "12px 24px", borderRadius: "100px", background: T.teal, color: "white", fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", textDecoration: "none" }}>
                            View All {isVehicle ? "Vehicles" : "Packages"}
                        </a>
                    </motion.div>
                )}
            </div>
        </main>
    );
}

/* ── Small helper component — keeps JSX above readable ── */
function FilterChip({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "100px", background: "rgba(7,157,154,0.07)", border: "1px solid rgba(7,157,154,0.15)", fontSize: "12px", fontWeight: 600, color: "#079d9a" }}>
            {icon}
            {label}
        </div>
    );
}

/* ══════════════════════════════════════════════════════════
   PAGE SHELL — your original Suspense wrapper, untouched
══════════════════════════════════════════════════════════ */
export default function ServicesPage(props: any) {
    return (
        <Suspense
            fallback={
                <div style={{ minHeight: "100vh", paddingTop: "140px", padding: "140px 24px 80px", maxWidth: "1280px", margin: "0 auto" }}>
                    {/* Skeleton header */}
                    <div style={{ height: "120px", borderRadius: "1.5rem", background: "#e2ecec", marginBottom: "32px", animation: "pulse 1.5s ease-in-out infinite" }} />
                    {/* Skeleton grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
                        {Array(8).fill(0).map((_, i) => (
                            <div key={i} style={{ height: "340px", borderRadius: "1.5rem", background: "#e2ecec", animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite` }} />
                        ))}
                    </div>
                    <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.45}}`}</style>
                </div>
            }
        >
            <ServicesContent {...props} />
        </Suspense>
    );
}