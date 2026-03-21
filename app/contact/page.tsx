"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Plane,
    Phone,
    Mail,
    MapPin,
    MessageSquare,
    MessageCircle,
    Clock,
    Send,
    CheckCircle2,
    Facebook,
    Instagram,
    ChevronRight,
    ArrowRight,
    User,
    FileText,
    Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/data";

/* ═══════════════════════════════════════════════════════
   BRAND TOKENS — matches your existing #079d9a palette
═══════════════════════════════════════════════════════ */
const T = {
    teal: "#079d9a",
    tealDark: "#057a78",
    tealGlow: "rgba(7,157,154,0.10)",
    tealBorder: "rgba(7,157,154,0.22)",
    navy: "#0d1420",
    navyMid: "#111a27",
    navyCard: "#141f2e",
    navyBorder: "rgba(255,255,255,0.07)",
    bg: "#f8fafa",         // slightly lighter than pure white — removes the flat look
    white: "#ffffff",
    slate50: "#f8fafc",
    slate100: "#f1f5f9",
    slate400: "#94a3b8",
    slate500: "#64748b",
    slate900: "#0f172a",
    dimHigh: "rgba(255,255,255,0.80)",
    dim: "rgba(255,255,255,0.45)",
    dimmer: "rgba(255,255,255,0.22)",
    border: "#e2ecec",
};

/* ═══════════════════════════════════════════════════════
   STATIC DATA
═══════════════════════════════════════════════════════ */
const CONTACT_INFO = [
    {
        icon: Phone,
        label: "Call Us",
        value: SITE_CONFIG.phone,
        description: "Sun–Fri, 9AM to 6PM.",
        href: `tel:${SITE_CONFIG.phone}`,
    },
    {
        icon: Mail,
        label: "Email Us",
        value: SITE_CONFIG.email,
        description: "Response within 24 hours.",
        href: `mailto:${SITE_CONFIG.email}`,
    },
    {
        icon: MapPin,
        label: "Visit Us",
        value: SITE_CONFIG.address,
        description: "Corporate Office",
        href: "#map",
    },
];

const CONTACT_CHANNELS = [
    {
        icon: Phone,
        label: "Call Us",
        title: "Talk to an Expert",
        lines: [SITE_CONFIG.phone, "+977 9810114227", "01-14546366"],
        action: `tel:${SITE_CONFIG.phone}`,
        actionLabel: "Call Now",
        highlight: false,
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        title: "Instant Chat",
        lines: ["Fastest response channel", "Flight & package queries", "Available every day"],
        action: `https://wa.me/${SITE_CONFIG.waPhone}`,
        actionLabel: "Open WhatsApp",
        highlight: true,
    },
    {
        icon: Mail,
        label: "Email",
        title: "Send a Message",
        lines: [SITE_CONFIG.email, "Reply within 2 hours", "Mon – Sun, 7AM – 9PM"],
        action: `mailto:${SITE_CONFIG.email}`,
        actionLabel: "Send Email",
        highlight: false,
    },
];

const SERVICES = [
    "Flight Ticketing",
    "Travel Package",
    "Vehicle Rental",
    "Visa Assistance",
    "Custom Itinerary",
    "Other",
];

const FAQ = [
    {
        q: "How fast can you confirm a flight booking?",
        a: "Most bookings are confirmed within 15–30 minutes during business hours. For urgent same-day flights, WhatsApp us directly for the fastest response.",
    },
    {
        q: "Do you handle international flights from Nepal?",
        a: "Yes — we book all major international routes from Kathmandu (TIA) including Dubai, Qatar, Bangkok, Singapore, Delhi, Kuala Lumpur, and more.",
    },
    {
        q: "Can I book a custom group tour package?",
        a: "Absolutely. Fill out the enquiry form with your group size and destination, and our team will craft a fully tailored itinerary for you.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept bank transfer, eSewa, Khalti, and cash at our Baneshwor office. International card payments are also available.",
    },
];

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════ */
export default function ContactPage() {
    // ── your original form state, untouched ──
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Flight Ticketing",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // ── your original WhatsApp handler, untouched ──
    const handleWhatsAppSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.message) {
            alert("Please enter your name and message.");
            return;
        }
        const text =
            `*New Inquiry from JetSet*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Interest:* ${formData.service}%0A` +
            `*Message:* ${formData.message}`;
        window.open(`https://wa.me/${SITE_CONFIG.waPhone}?text=${text}`, "_blank");
        setSubmitted(true);
    };

    const quickWhatsApp = (msg = "Hi JetSet Holidays! I need help with a booking.") => {
        window.open(`https://wa.me/${SITE_CONFIG.waPhone}?text=${encodeURIComponent(msg)}`, "_blank");
    };

    return (
        <main className="min-w-0 overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: T.bg, color: T.slate900 }}>

            {/* ── Google Font + global CSS ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

        /* Teal scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0d1420; }
        ::-webkit-scrollbar-thumb { background: #079d9a; border-radius: 4px; }

        /* ── Channel cards ── */
        .ch-card {
          border-radius: 1.5rem;
          padding: 28px 24px;
          border: 1px solid rgba(255,255,255,0.07);
          background: #141f2e;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: border-color .25s, transform .25s, box-shadow .25s;
        }
        .ch-card:hover { border-color: rgba(7,157,154,0.3); transform: translateY(-4px); box-shadow: 0 16px 40px rgba(7,157,154,0.1); }
        .ch-card.hl { background: linear-gradient(145deg, rgba(7,157,154,0.18) 0%, rgba(7,157,154,0.06) 100%); border-color: rgba(7,157,154,0.28); }
        .ch-action { display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#079d9a; text-decoration:none; margin-top:8px; transition:gap .2s; }
        .ch-action:hover { gap:11px; }

        /* ── Form inputs (dark panel) ── */
        .fi {
          width: 100%;
          background: rgba(255,255,255,0.055);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 13px 16px 13px 44px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          outline: none;
          transition: border-color .2s, background .2s;
          -webkit-appearance: none;
        }
        .fi::placeholder { color: rgba(255,255,255,0.3); }
        .fi:focus { border-color: #079d9a; background: rgba(7,157,154,0.08); }
        .fi option { background: #111a27; color: white; }
        textarea.fi { resize: vertical; min-height: 118px; padding-top: 13px; line-height: 1.6; }
        .iw { position: relative; }
        .iw .ic { position:absolute; left:14px; top:50%; transform:translateY(-50%); pointer-events:none; color:#079d9a; opacity:.65; }
        .iw.ta .ic { top:15px; transform:none; }

        /* ── Contact info card (light side) ── */
        .ci-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          background: white;
          border-radius: 1.5rem;
          border: 1px solid #e2ecec;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          transition: box-shadow .3s, border-color .3s, transform .3s;
          text-decoration: none;
          color: inherit;
        }
        .ci-card:hover { box-shadow: 0 12px 36px rgba(7,157,154,0.1); border-color: rgba(7,157,154,0.3); transform: translateY(-3px); }
        .ci-card:hover .ci-icon { background: #079d9a !important; }
        .ci-card:hover .ci-icon svg { color: white !important; }

        /* ── FAQ ── */
        .faq-item { border-radius: 14px; border: 1px solid #e2ecec; background: white; overflow: hidden; transition: border-color .2s; }
        .faq-item.open { border-color: #079d9a; }
        .faq-btn { width:100%; padding:18px 22px; display:flex; align-items:center; justify-content:space-between; gap:12px; background:none; border:none; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif; font-size:14px; font-weight:700; color:#0f172a; text-align:left; transition:color .18s; }
        .faq-btn:hover { color: #079d9a; }
        .faq-chev { flex-shrink:0; transition:transform .25s; color:#079d9a; }
        .faq-chev.open { transform:rotate(90deg); }
        .faq-body { padding: 0 22px 18px; font-size:13px; font-weight:400; line-height:1.72; color:#3d5a6a; }

        /* ── Social btn ── */
        .soc { width:36px; height:36px; border-radius:10px; border:1px solid rgba(255,255,255,0.07); background:rgba(255,255,255,0.04); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all .2s; text-decoration:none; }
        .soc:hover { border-color:rgba(7,157,154,0.3); background:rgba(7,157,154,0.12); transform:translateY(-2px); }

        /* ── Pulse dot ── */
        @keyframes pdot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.75)} }
        .pdot { animation: pdot 2s ease-in-out infinite; }

        /* ── Nav link ── */
        .nl { font-size:13px; font-weight:600; color:#64748b; text-decoration:none; transition:color .18s; }
        .nl:hover, .nl.active { color:#079d9a; }

        /* ─────────────── RESPONSIVE ─────────────── */
        @media (max-width: 1024px) {
          .form-sidebar-grid { flex-direction: column !important; }
          .form-sidebar-grid > *:last-child { max-width: 100% !important; width: 100% !important; }
          .map-row { flex-direction: column !important; }
          .map-row > *:last-child { max-width: 100% !important; width: 100% !important; }
        }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; }
          .channels-grid { grid-template-columns: 1fr !important; }
          .ci-cards-grid { grid-template-columns: 1fr !important; }
          .form-row-2 { grid-template-columns: 1fr !important; }
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
          .bottom-bar { flex-direction: column !important; text-align:center; gap:8px !important; }
          .desk-nav { display: none !important; }
          .hero-chips { flex-wrap: wrap; }
          .section-pad { padding-left: 16px !important; padding-right: 16px !important; }
          .prefooter-inner { flex-direction: column !important; gap: 24px !important; }
        }
        @media (max-width: 500px) {
          .footer-cols { grid-template-columns: 1fr !important; }
          .hero-text h1 { font-size: 2.4rem !important; }
        }
      `}</style>

            {/* ══════════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════════ */}
            <br /><br />

            {/* ══════════════════════════════════════════════
          HERO — dark panel, matches your brand
      ══════════════════════════════════════════════ */}
            <section className="section-pad" style={{ background: T.navy, position: "relative", overflow: "hidden", padding: "80px 24px 96px" }}>
                {/* Dot grid texture */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, rgba(7,157,154,0.085) 1.5px, transparent 1.5px)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />
                {/* Teal glow top-right */}
                <div style={{ position: "absolute", top: "-100px", right: "-60px", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(7,157,154,0.13) 0%, transparent 68%)", pointerEvents: "none" }} />
                {/* Wave into next section */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
                    <svg viewBox="0 0 1440 52" fill="none" style={{ display: "block" }}>
                        <path d="M0 52V26C360 0 720 52 1080 26C1260 13 1380 40 1440 26V52H0Z" fill={T.bg} />
                    </svg>
                </div>

                <div className="hero-inner" style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "52px", position: "relative", zIndex: 10 }}>
                    {/* ── LEFT: headline ── */}
                    <motion.div className="hero-text" style={{ flex: 1 }} {...fadeUp(0)}>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "5px 14px", borderRadius: "100px", background: "rgba(7,157,154,0.12)", border: "1px solid rgba(7,157,154,0.25)", fontSize: "10px", fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: T.teal, marginBottom: "22px" }}
                        >
                            <span className="pdot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: T.teal, display: "inline-block" }} />
                            We're Available 24/7
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: T.white, lineHeight: 1.04, marginBottom: "18px" }}
                        >
                            How can we<br />
                            <span style={{ color: T.teal }}>help you?</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.75, color: T.dim, maxWidth: "420px", marginBottom: "36px" }}
                        >
                            Whether you're looking for a luxury getaway or have a question about your booking, our elite concierge team is here for you.
                        </motion.p>

                        {/* Chips */}
                        <div className="hero-chips" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                            {[
                                { icon: MapPin, text: SITE_CONFIG.address },
                                { icon: Clock, text: "7AM – 9PM, Every Day" },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "8px 14px", borderRadius: "100px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                    <Icon style={{ width: "12px", height: "12px", color: T.teal, flexShrink: 0 }} />
                                    <span style={{ fontSize: "12px", fontWeight: 500, color: T.dim }}>{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── RIGHT: clickable contact chips ── */}
                    <motion.div
                        {...fadeUp(0.22)}
                        style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "340px" }}
                    >
                        {CONTACT_INFO.map(({ icon: Icon, label, value, description, href }) => (
                            <a
                                key={label}
                                href={href}
                                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 18px", borderRadius: "16px", background: T.navyCard, border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none", transition: "border-color .2s, transform .2s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(7,157,154,0.28)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateX(0)"; }}
                            >
                                <div style={{ width: "38px", height: "38px", borderRadius: "11px", background: "rgba(7,157,154,0.12)", border: "1px solid rgba(7,157,154,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <Icon style={{ width: "16px", height: "16px", color: T.teal }} />
                                </div>
                                <div style={{ overflow: "hidden", flex: 1 }}>
                                    <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "2px" }}>{label}</p>
                                    <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.82)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</p>
                                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>{description}</p>
                                </div>
                                <ChevronRight style={{ width: "14px", height: "14px", color: T.teal, flexShrink: 0 }} />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>



            {/* ══════════════════════════════════════════════
          MAIN CONTENT — white/light bg
      ══════════════════════════════════════════════ */}
            <section className="section-pad flex-col" style={{ padding: "80px 24px", background: T.bg }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                    {/* Section heading */}
                    <motion.div style={{ textAlign: "center", marginBottom: "56px" }} {...fadeUp(0)}>
                        <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: T.teal, marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            <span style={{ width: "20px", height: "2px", background: T.teal, display: "inline-block" }} />
                            Get In Touch
                            <span style={{ width: "20px", height: "2px", background: T.teal, display: "inline-block" }} />
                        </p>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 900, letterSpacing: "-0.035em", color: T.slate900, lineHeight: 1.1 }}>
                            We'll get back to you
                            <br /><span style={{ color: T.teal }}>within 2 hours.</span>
                        </h2>
                    </motion.div>

                    {/* ── 2-col: contact info cards + form ── */}
                    <div style={{ display: "flex flex-col", gridTemplateColumns: "1fr 1.3fr", gap: "28px", marginBottom: "28px" }} className="lg:grid-cols-2">

                        {/* LEFT: your original CONTACT_INFO cards — redesigned */}
                        <motion.div {...fadeUp(0.08)} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <div className="ci-cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}>
                                {CONTACT_INFO.map(({ icon: Icon, label, value, description, href }) => (
                                    <a key={label} href={href} className="ci-card">
                                        <div className="ci-icon" style={{ width: "52px", height: "52px", borderRadius: "16px", background: "rgba(7,157,154,0.09)", border: "1px solid rgba(7,157,154,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background .35s" }}>
                                            <Icon style={{ width: "22px", height: "22px", color: T.teal, transition: "color .35s" }} />
                                        </div>
                                        <div style={{ minWidth: 0 }}>
                                            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: T.slate400, marginBottom: "5px" }}>{label}</p>
                                            <p style={{ fontSize: "16px", fontWeight: 700, color: T.slate900, marginBottom: "4px", overflowWrap: "break-word", wordBreak: "break-all" }}>{value}</p>
                                            <p style={{ fontSize: "12px", fontWeight: 500, color: T.slate500 }}>{description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Office hours mini-table */}
                            <div style={{ borderRadius: "1.5rem", background: T.white, border: `1px solid ${T.border}`, padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                                <div style={{ height: "3px", borderRadius: "2px", background: `linear-gradient(to right, ${T.teal}, transparent)`, marginBottom: "16px" }} />
                                <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: T.teal, marginBottom: "14px" }}>Office Hours</p>
                                {[
                                    { day: "Mon – Fri", hrs: "7:00 AM – 9:00 PM" },
                                    { day: "Saturday", hrs: "8:00 AM – 8:00 PM" },
                                    { day: "Sunday", hrs: "9:00 AM – 6:00 PM" },
                                    { day: "Public Holidays", hrs: "WhatsApp Only" },
                                ].map(({ day, hrs }) => (
                                    <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: `1px solid ${T.border}` }}>
                                        <span style={{ fontSize: "13px", fontWeight: 600, color: T.slate900 }}>{day}</span>
                                        <span style={{ fontSize: "13px", color: T.slate500 }}>{hrs}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT: your original form — in dark panel with refined inputs */}
                        <motion.div
                            {...fadeUp(0.16)}
                            style={{ background: T.navyMid, borderRadius: "2rem", padding: "clamp(28px,5vw,44px)", border: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}
                        >
                            {/* Teal glow */}
                            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, rgba(7,157,154,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 20px", textAlign: "center", gap: "18px" }}
                                >
                                    <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(7,157,154,0.12)", border: "2px solid rgba(7,157,154,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <CheckCircle2 style={{ width: "34px", height: "34px", color: T.teal }} />
                                    </div>
                                    <h3 style={{ fontSize: "22px", fontWeight: 800, color: T.white }}>Message Sent!</h3>
                                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", maxWidth: "300px", lineHeight: 1.65 }}>
                                        Your enquiry has been sent via WhatsApp. Our team will reply within 2 hours.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", service: "Flight Ticketing", message: "" }); }}
                                        style={{ padding: "12px 28px", borderRadius: "12px", background: "rgba(7,157,154,0.12)", border: "1px solid rgba(7,157,154,0.25)", color: T.teal, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            ) : (
                                <form className="space-y-5 relative" style={{ position: "relative", zIndex: 1 }} onSubmit={handleWhatsAppSend}>
                                    <div style={{ marginBottom: "4px" }}>
                                        <h3 style={{ fontSize: "20px", fontWeight: 800, color: T.white, marginBottom: "4px" }}>Enquiry Form</h3>
                                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>Fill in the details and we'll find the best options for you.</p>
                                    </div>

                                    {/* Name + Email — your original fields */}
                                    <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                                        <div className="space-y-2">
                                            <label style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginLeft: "2px" }}>Full Name</label>
                                            <div className="iw">
                                                <User className="ic" style={{ width: "14px", height: "14px" }} />
                                                <input
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="fi"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginLeft: "2px" }}>Email Address</label>
                                            <div className="iw">
                                                <Mail className="ic" style={{ width: "14px", height: "14px" }} />
                                                <input
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="fi"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Interest — your original select */}
                                    <div className="space-y-2">
                                        <label style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginLeft: "2px" }}>Service Interest</label>
                                        <div className="iw">
                                            <FileText className="ic" style={{ width: "14px", height: "14px" }} />
                                            <select
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="fi"
                                                style={{ cursor: "pointer" }}
                                            >
                                                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message — your original textarea */}
                                    <div className="space-y-2">
                                        <label style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginLeft: "2px" }}>Message</label>
                                        <div className="iw ta">
                                            <MessageCircle className="ic" style={{ width: "14px", height: "14px" }} />
                                            <textarea
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Tell us about your dream trip..."
                                                className="fi"
                                            />
                                        </div>
                                    </div>

                                    {/* Your original Button component — preserved exactly */}
                                    <Button
                                        type="submit"
                                        className="w-full h-14 text-white rounded-2xl font-bold uppercase tracking-widest shadow-lg group flex items-center justify-center gap-2"
                                        style={{ background: T.teal, fontSize: "12px", letterSpacing: "0.12em" }}
                                    >
                                        Send via WhatsApp
                                        <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                    </Button>

                                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)", textAlign: "center" }}>
                                        Opens WhatsApp with your message pre-filled. No spam, ever.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          MAP + ADDRESS
      ══════════════════════════════════════════════ */}
            <section id="map" className="section-pad" style={{ padding: "0 24px 80px", background: T.bg }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <div className="map-row" style={{ display: "flex", gap: "22px", alignItems: "stretch" }}>
                        <motion.div style={{ flex: 1, borderRadius: "1.5rem", overflow: "hidden", minHeight: "360px", border: `1px solid ${T.border}` }} {...fadeUp(0)}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4!2d85.3352!3d27.7049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c5b6e1b3a3%3A0x123!2sBaneshwor%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1!5m2!1sen!2snp"
                                width="100%" height="100%"
                                style={{ border: 0, minHeight: "360px", filter: "grayscale(15%) contrast(1.05)" }}
                                allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="JetSet Holidays Location"
                            />
                        </motion.div>


                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
            <section className="section-pad flex-col" style={{ padding: "0 24px 80px", background: T.bg }}>
                <div style={{ maxWidth: "780px", margin: "0 auto" }}>
                    <motion.div style={{ textAlign: "center", marginBottom: "44px" }} {...fadeUp(0)}>
                        <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: T.teal, marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            <span style={{ width: "20px", height: "2px", background: T.teal, display: "inline-block" }} />
                            FAQ
                            <span style={{ width: "20px", height: "2px", background: T.teal, display: "inline-block" }} />
                        </p>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: T.slate900 }}>Common Questions</h2>
                    </motion.div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {FAQ.map(({ q, a }, i) => (
                            <motion.div key={i} className={`faq-item${openFaq === i ? " open" : ""}`} {...fadeUp(i * 0.07)}>
                                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    <span>{q}</span>
                                    <ChevronRight className={`faq-chev${openFaq === i ? " open" : ""}`} style={{ width: "16px", height: "16px" }} />
                                </button>
                                {openFaq === i && (
                                    <motion.div className="faq-body" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
                                        {a}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </main>
    );
}