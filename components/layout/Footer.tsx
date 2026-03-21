"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Plane,
    MapPin,
    Mail,
    Phone,
    Facebook,
    Instagram,
    ArrowUpRight,
    MessageCircle,
    Clock,
    ChevronRight,
} from "lucide-react";

/* ─── Brand tokens ─── */
const T = {
    teal: "#079d9a",
    tealGlow: "rgba(7,157,154,0.12)",
    tealBorder: "rgba(7,157,154,0.22)",
    navy: "#0d1420",
    navyCard: "#111a27",
    navyBorder: "rgba(255,255,255,0.06)",
    white: "#ffffff",
    dim: "rgba(255,255,255,0.45)",
    dimmer: "rgba(255,255,255,0.22)",
};

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Travel Packages", href: "/services" },
    { label: "Flight Tickets", href: "/ticketing" },
    { label: "Vehicle Rental", href: "/services?type=vehicle" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const CONTACT = {
    address: "Milan Chowk B, Baneshwor, Kathmandu",
    email: "jetsetholidays36@gmail.com",
    phones: ["+977 9841743706", "+977 9810114227", "01-14546366"],
};

const SOCIAL = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Jetsetholiday" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/jetsetholidays36?igsh=cXZ1dHl2aWluNWNw" },
];

function doWhatsApp() {
    const phone = "9779841743706";
    const text = "Hi JetSet Holidays! I need help with a booking.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}

export default function Footer() {
    return (
        <footer style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: T.navy, position: "relative", overflow: "hidden" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        /* ── Teal noise-grain background texture ── */
        .footer-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(7,157,154,0.13) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Dot-grid ── */
        .dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(7,157,154,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* ── Big wordmark ── */
        .wordmark {
          font-size: clamp(5rem, 14vw, 12rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 1;
          background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
        }

        /* ── Footer links ── */
        .f-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: ${T.dim};
          text-decoration: none;
          padding: 5px 0;
          transition: color 0.2s, gap 0.2s;
          line-height: 1;
        }
        .f-link:hover { color: ${T.white}; gap: 10px; }
        .f-link .arrow { opacity: 0; transform: scale(0.7); transition: opacity 0.2s, transform 0.2s; color: ${T.teal}; }
        .f-link:hover .arrow { opacity: 1; transform: scale(1); }

        /* ── Social btn ── */
        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid ${T.navyBorder};
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .social-btn:hover { border-color: ${T.tealBorder}; background: ${T.tealGlow}; transform: translateY(-2px); }

        /* ── WA Button ── */
        .wa-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px 24px;
          border-radius: 12px;
          background: ${T.teal};
          color: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: all 0.22s;
        }
        .wa-btn:hover { background: #068a87; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(7,157,154,0.3); }

        /* ── Divider ── */
        .h-rule { height: 1px; background: ${T.navyBorder}; }

        /* ── Col label ── */
        .col-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: ${T.teal};
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .col-label::after { content: ''; flex: 1; height: 1px; background: ${T.tealBorder}; }

        /* ── Contact row ── */
        .c-row {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-bottom: 18px;
        }
        .c-row:last-child { margin-bottom: 0; }
        .c-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: ${T.tealGlow};
          border: 1px solid ${T.tealBorder};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* ── Status dot ── */
        @keyframes pulse-dot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

        /* ── GRID & LAYOUT ── */
        .f-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 64px 40px 40px;
            display: grid;
            grid-template-columns: 1.6fr 1fr 1.4fr 1.2fr;
            gap: 48px;
            position: relative;
            z-index: 10;
        }

        .cta-band {
            max-width: 1280px;
            margin: 0 auto;
            padding: 48px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 32px;
        }

        .bottom-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 0;
            gap: 24px;
        }
        .bottom-links { display: flex; gap: 20px; }
        .bottom-text { font-size: 11px; font-weight: 500; color: ${T.dimmer}; letter-spacing: 0.02em; }

        /* ─────────────── RESPONSIVE ─────────────── */
        @media (max-width: 1100px) {
            .f-container { grid-template-columns: 1.5fr 1fr 1.5fr; }
            .f-container > div:last-child { grid-column: span 3; }
        }

        @media (max-width: 850px) {
            .f-container { grid-template-columns: 1fr 1fr; gap: 40px; padding: 48px 24px 24px; }
            .f-container > div:first-child { grid-column: span 2; }
            .f-container > div:last-child { grid-column: span 2; }
            .cta-band { padding: 40px 24px; flex-direction: column; text-align: center; }
            .cta-band h3 br { display: none; }
            .bottom-bar { flex-direction: column; text-align: center; padding: 32px 0; }
            .bottom-links { justify-content: center; }
        }

        @media (max-width: 550px) {
            .f-container { grid-template-columns: 1fr; gap: 32px; }
            .f-container > div { grid-column: span 1 !important; }
            .bottom-links { flex-direction: column; gap: 10px; }
        }
      `}</style>

            {/* ═══════════════════════════════════════════
          PRE-FOOTER CTA BAND
      ═══════════════════════════════════════════ */}



            {/* ═══════════════════════════════════════════
          MAIN FOOTER BODY
      ═══════════════════════════════════════════ */}
            <div className="footer-bg" style={{ position: "relative" }}>
                <div className="dot-grid" />

                <div style={{ position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)", zIndex: 0, pointerEvents: "none", width: "100%", textAlign: "center", overflow: "hidden" }}>
                    <span className="wordmark">JETSET</span>
                </div>

                <div className="f-container">
                    {/* ── COL 1: Brand ── */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                            <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: `linear-gradient(135deg, ${T.teal}, #04706e)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 20px rgba(7,157,154,0.3)` }}>
                                <Plane style={{ width: "18px", height: "18px", color: "white", transform: "rotate(45deg)" }} />
                            </div>
                            <div>
                                <p style={{ fontSize: "18px", fontWeight: 900, letterSpacing: "-0.03em", color: T.white, lineHeight: 1 }}>
                                    Jet<span style={{ color: T.teal }}>Set</span>
                                </p>
                                <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: T.dim, marginTop: "2px" }}>Holidays</p>
                            </div>
                        </div>

                        <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.75, color: T.dim, maxWidth: "280px", marginBottom: "28px" }}>
                            Connecting adventure seekers with reliable flights, curated packages, and expert local transportation across Nepal and beyond.
                        </p>

                        <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
                            {SOCIAL.map(({ icon: Icon, label, href }) => (
                                <a key={label} href={href} className="social-btn" aria-label={label}>
                                    <Icon style={{ width: "15px", height: "15px", color: T.dim }} />
                                </a>
                            ))}
                        </div>

                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "100px", background: T.tealGlow, border: `1px solid ${T.tealBorder}` }}>
                            <Clock style={{ width: "12px", height: "12px", color: T.teal }} />
                            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: T.teal }}>24 / 7 SUPPORT</span>
                        </div>
                    </div>

                    {/* ── COL 2: Explore ── */}
                    <div>
                        <p className="col-label">Explore</p>
                        <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            {NAV_LINKS.map(({ label, href }) => (
                                <a key={label} href={href} className="f-link">
                                    <ChevronRight className="arrow" style={{ width: "12px", height: "12px", flexShrink: 0 }} />
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* ── COL 3: Contact ── */}
                    <div>
                        <p className="col-label">Contact</p>

                        <div className="c-row">
                            <div className="c-icon-wrap">
                                <MapPin style={{ width: "14px", height: "14px", color: T.teal }} />
                            </div>
                            <div>
                                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.dimmer, marginBottom: "4px" }}>Office</p>
                                <p style={{ fontSize: "13px", fontWeight: 500, color: T.dim, lineHeight: 1.5 }}>{CONTACT.address}</p>
                            </div>
                        </div>

                        <div className="c-row">
                            <div className="c-icon-wrap">
                                <Mail style={{ width: "14px", height: "14px", color: T.teal }} />
                            </div>
                            <div>
                                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.dimmer, marginBottom: "4px" }}>Email</p>
                                <a href={`mailto:${CONTACT.email}`} style={{ fontSize: "13px", fontWeight: 500, color: T.dim, textDecoration: "none", transition: "color 0.18s" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = T.teal)}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = T.dim)}
                                >
                                    {CONTACT.email}
                                </a>
                            </div>
                        </div>

                        <div className="c-row">
                            <div className="c-icon-wrap">
                                <Phone style={{ width: "14px", height: "14px", color: T.teal }} />
                            </div>
                            <div>
                                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.dimmer, marginBottom: "4px" }}>Phone</p>
                                {CONTACT.phones.map((p) => (
                                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} style={{ display: "block", fontSize: "13px", fontWeight: 500, color: T.dim, textDecoration: "none", marginBottom: "3px", transition: "color 0.18s" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = T.white)}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = T.dim)}
                                    >
                                        {p}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── COL 4: Support card ── */}
                    <div>
                        <p className="col-label">Quick Booking</p>

                        <div style={{ borderRadius: "18px", background: T.navyCard, border: `1px solid ${T.navyBorder}`, padding: "24px", marginBottom: "12px" }}>
                            <div style={{ height: "3px", borderRadius: "2px", background: `linear-gradient(to right, ${T.teal}, transparent)`, marginBottom: "18px" }} />

                            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px" }}>
                                <span className="pulse-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: T.teal, display: "inline-block" }} />
                                <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: T.teal }}>24/7 Support</span>
                            </div>

                            <p style={{ fontSize: "13px", fontWeight: 400, color: T.dim, lineHeight: 1.65, marginBottom: "20px" }}>
                                Need a custom itinerary or help with a booking? Our travel experts are always ready.
                            </p>

                            <button className="wa-btn" onClick={doWhatsApp}>
                                <MessageCircle style={{ width: "15px", height: "15px" }} />
                                WhatsApp
                                <ArrowUpRight style={{ width: "13px", height: "13px", marginLeft: "2px" }} />
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
                    <div className="h-rule" />
                    <div className="bottom-bar">
                        <p className="bottom-text">© 2026 JetSet Holidays Pvt. Ltd. — All rights reserved.</p>



                        <p className="bottom-text">
                            Developed by{" "}
                            <a href="#" style={{ color: T.teal, textDecoration: "none" }}>Nirvaya Ligal</a>
                            {" "}|{" "}
                            <a href="#" style={{ color: T.teal, textDecoration: "none" }}>Zentro Digital Services</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
}