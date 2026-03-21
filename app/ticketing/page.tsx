"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Plane,
  ArrowRight,
  MapPin,
  Shield,
  Clock,
  PhoneCall,
  Globe,
  Mountain,
  CheckCircle2,
  ChevronRight,
  Star,
  Users,
  Headphones,
  Ticket,
  Send,
} from "lucide-react";

/* ─────────────────────────────────────────
   BRAND TOKENS  (match screenshot exactly)
───────────────────────────────────────── */
const T = {
  teal: "#079d9a",
  tealLight: "#e6f7f7",
  tealMid: "#c2eaea",
  navy: "#0d1b2a",
  navyMid: "#1e3448",
  bg: "#eef4f4",
  white: "#ffffff",
  muted: "#6b8899",
  border: "#d4e6e6",
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const NAT_DESTINATIONS = [
  { code: "PKR", city: "Pokhara", tag: "Mountain Gateway" },
  { code: "BWA", city: "Bhairahawa", tag: "Lumbini Access" },
  { code: "BHR", city: "Biratnagar", tag: "Eastern Hub" },
  { code: "JMO", city: "Jomsom", tag: "Mustang Trek" },
  { code: "LUA", city: "Lukla", tag: "Everest Base" },
  { code: "SIF", city: "Simara", tag: "Business Route" },
];

const INTL_DESTINATIONS = [
  { code: "DEL", city: "New Delhi", country: "India" },
  { code: "DXB", city: "Dubai", country: "UAE" },
  { code: "DOH", city: "Doha", country: "Qatar" },
  { code: "BKK", city: "Bangkok", country: "Thailand" },
  { code: "KUL", city: "Kuala Lumpur", country: "Malaysia" },
  { code: "SIN", city: "Singapore", country: "Singapore" },
];

const STATS = [
  { value: "10+", label: "Airlines Connected" },
  { value: "20+", label: "Destinations" },
  { value: "24/7", label: "Support Available" },
  { value: "100+", label: "Happy Travelers" },
];

const STEPS = [
  {
    n: "01",
    icon: PhoneCall,
    title: "Tell Us Your Plan",
    desc: "Share your travel dates, destination, and passenger count via WhatsApp or our form.",
  },
  {
    n: "02",
    icon: Ticket,
    title: "We Find Best Options",
    desc: "Our team searches national and international carriers to get you the best fares and timings.",
  },
  {
    n: "03",
    icon: Send,
    title: "Confirm & Fly",
    desc: "Approve your itinerary, complete payment securely, and receive e-tickets instantly.",
  },
];

const AIRLINES = ["Buddha Air", "Yeti Airlines", "Shree Airlines", "Tara Air", "Qatar Airways", "Emirates", "IndiGo", "Air Arabia", "Nepal Airlines"];

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 14px",
        borderRadius: "100px",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        background: T.tealLight,
        color: T.teal,
        border: `1px solid ${T.tealMid}`,
      }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "10px",
        fontWeight: 800,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        marginBottom: "16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: T.teal,
        justifyContent: "center",
      }}
    >
      <span style={{ display: "inline-block", width: "20px", height: "2px", background: T.teal }} />
      {children}
      <span style={{ display: "inline-block", width: "20px", height: "2px", background: T.teal }} />
    </p>
  );
}

function doWhatsApp(service: string) {
  const phone = "9779841743706";
  const text = `Hi! I'm interested in your *${service}* flight booking service. Please help me.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function FlightPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const planeX = useTransform(scrollYProgress, [0, 1], ["-5%", "110%"]);
  const [activeTab, setActiveTab] = useState<"national" | "international">("national");

  return (
    <main style={{ background: T.bg, fontFamily: "'Plus Jakarta Sans', sans-serif", color: T.navy, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        .teal-btn {
          background: ${T.teal};
          color: #fff;
          border: none;
          border-radius: 100px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.22s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
        }
        .teal-btn:hover { background: ${T.navyMid}; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(7,157,154,0.25); }
        .ghost-btn {
          background: transparent;
          color: ${T.teal};
          border: 1.5px solid ${T.teal};
          border-radius: 100px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.22s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
        }
        .ghost-btn:hover { background: ${T.tealLight}; transform: translateY(-2px); }
        .dest-card { transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s; }
        .dest-card:hover { border-color: ${T.teal} !important; box-shadow: 0 8px 28px rgba(7,157,154,0.13); transform: translateY(-3px); }
        .dest-card:hover .dest-arrow { opacity: 1 !important; transform: translateX(0) !important; }
        .dest-arrow { opacity: 0; transform: translateX(-6px); transition: all 0.2s; }
        .airline-pill {
          white-space: nowrap;
          background: white;
          border: 1px solid ${T.border};
          border-radius: 100px;
          padding: 8px 20px;
          font-size: 12px;
          font-weight: 600;
          color: ${T.navyMid};
          display: inline-flex;
          align-items: center;
          gap: 7px;
          flex-shrink: 0;
        }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-inner { display: flex; gap: 14px; animation: marquee 20s linear infinite; width: max-content; }
        .stat-card { background: ${T.white}; }
        .nav-link { color: ${T.muted}; text-decoration: none; font-size: 13px; font-weight: 600; transition: color 0.18s; }
        .nav-link:hover { color: ${T.teal}; }
        .tab-btn { padding: 10px 28px; border-radius: 100px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; border: none; font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s; }
        
        /* --- Mobile Logic --- */
        @media (max-width: 768px) {
          .hero-container { flex-direction: column !important; padding: 120px 24px 60px !important; text-align: center; gap: 40px !important; }
          .hero-left { width: 100%; }
          .hero-right { display: none !important; }
          .hero-badge { justify-content: center; margin: 0 auto; }
          .hero-h1 { font-size: 2.8rem !important; margin: 20px auto !important; }
          .hero-p { margin: 16px auto !important; }
          .hero-btns { justify-content: center; }
          .hero-features { justify-content: center; }
          
          .stats-section { padding: 32px 16px !important; }
          .stats-grid-inner { grid-template-columns: repeat(2, 1fr) !important; gap: 1px !important; width: 100% !important; }
          .stat-card-inner { padding: 20px 8px !important; }
          .stat-card-inner p { font-size: 24px !important; }
          .stat-card-inner p + p { font-size: 10px !important; line-height: 1.2; }
          
          .dest-grid-inner { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
          .dest-card-inner { padding: 16px 12px !important; }
          .dest-card-inner p:first-of-type { font-size: 18px !important; }
          
          .steps-grid-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
          .step-connector { display: none !important; }
          
          .cta-panel-inner { flex-direction: column !important; padding: 40px 24px !important; gap: 32px !important; text-align: center; }
          .cta-left { width: 100% !important; }
          .cta-left h2 { font-size: 2rem !important; }
          .cta-left p { margin: 0 auto !important; }
          .cta-left-btns { justify-content: center; }
          .cta-right { width: 100% !important; max-width: 100% !important; }
          
          /* Hide duplicate nav on mobile to avoid clutter */
          .local-nav { display: none !important; }
        }
        @media (max-width: 480px) {
           .dest-grid-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <nav className="local-nav" style={{ background: T.white, borderBottom: `1px solid ${T.border}`, position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: T.navy, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Plane style={{ width: "16px", height: "16px", color: T.teal, transform: "rotate(45deg)" }} />
            </div>
            <span style={{ fontWeight: 900, fontSize: "20px", letterSpacing: "-0.03em", color: T.navy }}>
              Jet<span style={{ color: T.teal }}>Set</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
            {["Home", "Packages", "Flights", "Visa", "About Us", "Contact"].map((item) => (
              <a key={item} href="#" className="nav-link" style={item === "Flights" ? { color: T.teal } : {}}>
                {item}
              </a>
            ))}
          </div>
          <button className="teal-btn" style={{ padding: "11px 22px" }} onClick={() => doWhatsApp("General Enquiry")}>
            <PhoneCall style={{ width: "14px", height: "14px" }} /> Get a Quote
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyMid} 100%)`, minHeight: "91vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}
      >
        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.09, backgroundImage: `radial-gradient(circle, ${T.teal} 1.5px, transparent 1.5px)`, backgroundSize: "34px 34px" }} />

        {/* SVG flight paths */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12 }} viewBox="0 0 1400 700" fill="none" preserveAspectRatio="none">
          <path d="M-100 500 Q350 100 700 350 Q1050 600 1500 200" stroke={T.teal} strokeWidth="1.5" strokeDasharray="8 6" fill="none" />
          <path d="M-100 350 Q400 620 750 250 Q1100 -50 1500 420" stroke={T.teal} strokeWidth="1" strokeDasharray="4 10" fill="none" />
          <circle cx="700" cy="350" r="160" stroke={T.teal} strokeWidth="0.8" strokeDasharray="4 6" fill="none" opacity="0.5" />
        </svg>

        {/* Animated plane */}
        <motion.div style={{ x: planeX, position: "absolute", top: "44%", transform: "translateY(-50%)", zIndex: 10, pointerEvents: "none" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: T.teal, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 0 8px rgba(7,157,154,0.15)` }}>
            <Plane style={{ width: "20px", height: "20px", color: "white" }} />
          </div>
        </motion.div>

        {/* Content */}
        <div className="hero-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 32px", display: "flex", gap: "64px", alignItems: "center", position: "relative", zIndex: 20, width: "100%" }}>
          {/* Left */}
          <motion.div className="hero-left" style={{ flex: 1 }} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <div className="hero-badge" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Badge>
                <Shield style={{ width: "12px", height: "12px" }} /> Secure Flight Booking
              </Badge>
            </div>

            <h1 className="hero-h1" style={{ marginTop: "24px", fontWeight: 900, fontSize: "clamp(2.6rem, 5.5vw, 5rem)", lineHeight: 1.0, letterSpacing: "-0.03em", color: T.white }}>
              Fly Anywhere<br />
              <span style={{ color: T.teal }}>From Nepal.</span>
            </h1>

            <p className="hero-p" style={{ marginTop: "20px", fontSize: "16px", fontWeight: 300, lineHeight: 1.7, maxWidth: "420px", color: "#8fafc0" }}>
              We handle your flight bookings — domestic mountain routes or international connections — so you can focus on the journey ahead.
            </p>

            <div className="hero-btns" style={{ marginTop: "36px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button className="teal-btn" onClick={() => doWhatsApp("National Flight")}>
                Book Domestic <ArrowRight style={{ width: "15px", height: "15px" }} />
              </button>
              <button className="ghost-btn" onClick={() => doWhatsApp("International Flight")}>
                <Globe style={{ width: "14px", height: "14px" }} /> International Routes
              </button>
            </div>

            <div className="hero-features" style={{ marginTop: "40px", display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {["No Hidden Fees", "Instant E-Ticket", "24/7 WhatsApp Support"].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "13px", fontWeight: 500, color: "#8fafc0" }}>
                  <CheckCircle2 style={{ width: "15px", height: "15px", color: T.teal }} />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — glass card */}
          <motion.div className="hero-right " style={{ flexShrink: 0, width: "340px" }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <div style={{ borderRadius: "24px", padding: "32px", background: "rgba(255,255,255,0.055)", border: `1px solid rgba(7,157,154,0.22)`, backdropFilter: "blur(16px)" }}>
              <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: T.teal, marginBottom: "24px" }}>
                Why Book With Us
              </p>
              {[
                { icon: Globe, title: "National & International", desc: "All Nepal domestic routes + worldwide connections" },
                { icon: Headphones, title: "Personal Booking Agent", desc: "A real person handles your ticket end-to-end" },
                { icon: Shield, title: "Price Match Guarantee", desc: "We match or beat any verified flight price" },
                { icon: Clock, title: "Fast Confirmation", desc: "Tickets confirmed and sent within minutes" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: "14px", marginBottom: "20px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(7,157,154,0.14)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: "16px", height: "16px", color: T.teal }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: T.white }}>{title}</p>
                    <p style={{ fontSize: "11px", fontWeight: 400, color: "#8fafc0", marginTop: "3px", lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
            <path d="M0 56V28C240 0 480 56 720 28C960 0 1200 56 1440 28V56H0Z" fill={T.bg} />
          </svg>
        </div>
      </section>
      {/* ═══════════════════════════════════
          AIRLINE MARQUEE
      ═══════════════════════════════════ */}
      <section style={{ padding: "48px 0", background: T.white, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, overflow: "hidden" }}>
        <p style={{ textAlign: "center", fontSize: "10px", fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: T.muted, marginBottom: "24px" }}>
          Airlines We Book
        </p>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-inner">
            {[...AIRLINES, ...AIRLINES].map((airline, i) => (
              <div key={i} className="airline-pill">
                <Plane style={{ width: "12px", height: "12px", color: T.teal }} />
                {airline}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════
          STATS
      ═══════════════════════════════════ */}
      <section className="stats-section" style={{ padding: "32px 24px", background: T.bg }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="stats-grid-inner" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderRadius: "20px", overflow: "hidden", border: `1px solid ${T.border}`, gap: "1px", background: T.border }}>
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="stat-card stat-card-inner"
                style={{ textAlign: "center", padding: "32px 16px", background: T.white }}
              >
                <p style={{ fontSize: "38px", fontWeight: 900, letterSpacing: "-0.04em", color: T.teal }}>{value}</p>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.muted, marginTop: "4px" }}>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          DESTINATIONS (tabbed)
      ═══════════════════════════════════ */}
      <section style={{ padding: "80px 32px", background: T.bg }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Our Flight Services</SectionLabel>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.03em", color: T.navy, lineHeight: 1.1 }}>
              Where Do You Want<br />
              <span style={{ color: T.teal }}>to Fly?</span>
            </h2>
            <p style={{ marginTop: "14px", fontSize: "15px", fontWeight: 300, color: T.muted, maxWidth: "480px", margin: "14px auto 0" }}>
              Whether it's a quick hop to Pokhara or a long-haul to Dubai, we've got every route covered.
            </p>

            {/* Tabs */}
            <div style={{ marginTop: "28px", display: "inline-flex", padding: "4px", borderRadius: "100px", background: T.white, border: `1px solid ${T.border}` }}>
              {(["national", "international"] as const).map((tab) => (
                <button
                  key={tab}
                  className="tab-btn"
                  onClick={() => setActiveTab(tab)}
                  style={activeTab === tab ? { background: T.teal, color: "white" } : { background: "transparent", color: T.muted }}
                >
                  {tab === "national" ? "🇳🇵 National" : "🌍 International"}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          {activeTab === "national" && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <div className="dest-grid-inner" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" }}>
                {NAT_DESTINATIONS.map((d, i) => (
                  <motion.div
                    key={d.code}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.055 }}
                    className="dest-card dest-card-inner"
                    style={{ borderRadius: "18px", padding: "22px 18px", background: T.white, border: `1px solid ${T.border}`, cursor: "pointer" }}
                  >
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                      <Mountain style={{ width: "18px", height: "18px", color: T.teal }} />
                    </div>
                    <p style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-0.03em", color: T.navy }}>{d.code}</p>
                    <p style={{ fontSize: "13px", fontWeight: 600, marginTop: "2px", color: T.navyMid }}>{d.city}</p>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "8px", color: T.muted }}>{d.tag}</p>
                    <div className="dest-arrow" style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "10px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: T.teal }}>
                      Book Now <ChevronRight style={{ width: "12px", height: "12px" }} />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div style={{ textAlign: "center" }}>
                <button className="ghost-btn" onClick={() => doWhatsApp("National Flight Booking")}>
                  <Plane style={{ width: "14px", height: "14px" }} /> View All Domestic Routes
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === "international" && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <div className="dest-grid-inner" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" }}>
                {INTL_DESTINATIONS.map((d, i) => (
                  <motion.div
                    key={d.code}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.055 }}
                    className="dest-card dest-card-inner"
                    style={{ borderRadius: "18px", padding: "22px 18px", background: T.white, border: `1px solid ${T.border}`, cursor: "pointer" }}
                  >
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                      <Globe style={{ width: "18px", height: "18px", color: T.teal }} />
                    </div>
                    <p style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-0.03em", color: T.navy }}>{d.code}</p>
                    <p style={{ fontSize: "13px", fontWeight: 600, marginTop: "2px", color: T.navyMid }}>{d.city}</p>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "8px", color: T.muted }}>{d.country}</p>
                    <div className="dest-arrow" style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "10px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: T.teal }}>
                      Enquire <ChevronRight style={{ width: "12px", height: "12px" }} />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div style={{ textAlign: "center" }}>
                <button className="ghost-btn" onClick={() => doWhatsApp("International Flight Booking")}>
                  <Globe style={{ width: "14px", height: "14px" }} /> View All International Routes
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════ */}
      <section style={{ padding: "80px 32px", background: T.navy }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: T.teal, marginBottom: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span style={{ width: "20px", height: "2px", background: T.teal, display: "inline-block" }} />Simple Process<span style={{ width: "20px", height: "2px", background: T.teal, display: "inline-block" }} />
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.03em", color: T.white, lineHeight: 1.1 }}>
              Book Your Flight<br />
              <span style={{ color: T.teal }}>In 3 Easy Steps</span>
            </h2>
          </div>

          <div className="steps-grid-inner" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", position: "relative" }}>
            {/* Dashed connector */}
            <div className="step-connector" style={{ position: "absolute", top: "36px", left: "calc(16.66% + 16px)", right: "calc(16.66% + 16px)", height: "1px", borderTop: `2px dashed rgba(7,157,154,0.25)`, pointerEvents: "none" }} />

            {STEPS.map(({ n, icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                style={{ textAlign: "center" }}
              >
                <div style={{ position: "relative", display: "inline-flex", marginBottom: "22px" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "18px", background: T.teal, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 10 }}>
                    <Icon style={{ width: "28px", height: "28px", color: "white" }} />
                  </div>
                  <span style={{ position: "absolute", top: "-10px", right: "-10px", width: "26px", height: "26px", borderRadius: "50%", background: T.navy, border: `2px solid ${T.teal}`, color: T.teal, fontSize: "9px", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20 }}>
                    {n}
                  </span>
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: T.white, marginBottom: "10px" }}>{title}</h3>
                <p style={{ fontSize: "13px", fontWeight: 300, lineHeight: 1.65, color: "#8fafc0", maxWidth: "240px", margin: "0 auto" }}>{desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "52px" }}>
            <button className="teal-btn" style={{ fontSize: "12px" }} onClick={() => doWhatsApp("Flight Booking")}>
              Start Booking Now <ArrowRight style={{ width: "15px", height: "15px" }} />
            </button>
          </div>
        </div>
      </section>





      {/* ═══════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════ */}


      <br /><br /><br /><br />
      <section style={{ padding: "0 24px 80px", background: T.bg }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="cta-panel-inner" style={{ borderRadius: "28px", overflow: "hidden", padding: "64px", background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyMid} 100%)`, display: "flex", gap: "56px", alignItems: "center" }}>
            <div className="cta-left" style={{ flex: 1 }}>
              <Badge>
                <Users style={{ width: "12px", height: "12px" }} /> Talk to a Real Agent
              </Badge>
              <h2 style={{ marginTop: "20px", marginBottom: "16px", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: T.white, lineHeight: 1.1 }}>
                Ready to Book<br />
                <span style={{ color: T.teal }}>Your Next Flight?</span>
              </h2>
              <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.7, color: "#8fafc0", maxWidth: "420px" }}>
                Skip the confusing booking portals. Message us on WhatsApp and our team will find your best options — national or international — in minutes.
              </p>
              <div className="cta-left-btns" style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
                <button className="teal-btn" onClick={() => doWhatsApp("National Flight")}>
                  🇳🇵 Book Domestic
                </button>
                <button className="teal-btn" style={{ background: "rgba(7,157,154,0.18)", color: T.teal }} onClick={() => doWhatsApp("International Flight")}>
                  🌍 Book International
                </button>
              </div>
            </div>

            {/* Contact box */}
            <div className="cta-right" style={{ flexShrink: 0, width: "300px", borderRadius: "20px", padding: "28px", background: "rgba(255,255,255,0.055)", border: "1px solid rgba(7,157,154,0.2)" }}>
              <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: T.teal, marginBottom: "22px" }}>
                Contact Us Directly
              </p>
              {[
                { icon: PhoneCall, label: "WhatsApp", value: "+977 984-1743706" },
                { icon: MapPin, label: "Office", value: "Milan Chowk,Baneswor" },
                { icon: Clock, label: "Hours", value: "7AM – 9PM, Every Day" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "rgba(7,157,154,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: "15px", height: "15px", color: T.teal }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "9px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "#4a6880" }}>{label}</p>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: T.white }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}