"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2, Plane, ArrowRight, MapPin, AlertCircle, Clock, MessageCircle, ShieldCheck, Briefcase, Coffee } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG, AIRPORTS, FLIGHTS } from "@/lib/data";

interface AirLabsFlight {
    airline_iata: string;
    flight_iata?: string;
    flight_number?: string;
    dep_time: string;
    dep_iata: string;
    duration?: number;
    arr_time: string;
    arr_iata: string;
}

function TicketingContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [flights, setFlights] = useState<AirLabsFlight[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");
    const searchDate = searchParams.get("date") || "";

    const displayDate = searchDate
        ? new Date(searchDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
        : new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

    const handleDateChange = (newDate: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("date", newDate);
        router.push(`/ticketing?${params.toString()}`, { scroll: false });
    };

    useEffect(() => {
        async function fetchFlights() {
            if (!origin || !destination) {
                setLoading(false);
                return;
            }

            setFlights([]);
            setLoading(true);
            setError(null);

            try {
                // Add a timestamp to prevent any browser caching of the API request
                const timestamp = new Date().getTime();
                const res = await fetch(`/api/flights?dep_iata=${origin}&arr_iata=${destination}${searchDate ? `&date=${searchDate}` : ''}&t=${timestamp}`);
                if (!res.ok) throw new Error("Could not connect to flight server");
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                
                // Set the flights from the API response
                const fetchedFlights = Array.isArray(data) ? (data as AirLabsFlight[]) : [];
                setFlights(fetchedFlights);
            } catch (err: any) {
                console.error("Fetch error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchFlights();
    }, [origin, destination, searchDate]);

    const formatTime = (timeStr: string) => {
        if (!timeStr) return "---";
        if (timeStr.includes(' ')) {
            return timeStr.split(' ')[1];
        }
        return timeStr;
    };

    const getCityName = (iata: string) => {
        return AIRPORTS.find(a => a.id === iata)?.city || iata;
    };

    const getAirlineLogo = (iata: string) => {
        const localLogos: { [key: string]: string } = {
            'U4': '/buddha-air.jpg',
            'YT': '/yeti-airlines.png',
            'N9': '/shree-airline.png',
            'RA': '/nepal-airlines.png',
            'TA': '/tara-air.png',
            'AI': '/air-india.jpg',
            'QR': '/qatar-airways.png',
            'SQ': '/singapore-airlines.png'
        };
        return localLogos[iata] || `https://images.kiwi.com/airlines/64/${iata}.png`;
    };

    const getAirlineName = (iata: string) => {
        const names: { [key: string]: string } = {
            'U4': 'Buddha Air',
            'YT': 'Yeti Airlines',
            'N9': 'Shree Airlines',
            'RA': 'Nepal Airlines',
            'TA': 'Tara Air',
            'AI': 'Air India',
            'QR': 'Qatar Airways',
            'SQ': 'Singapore Airlines',
            'TG': 'Thai Airways',
            'TK': 'Turkish Airlines',
            'MH': 'Malaysian Airlines',
            'Q2': 'Maldivian'
        };
        return names[iata] || iata;
    };

    if (loading) return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
            <div className="relative">
                <Loader2 className="w-16 h-16 text-[#079d9a] animate-spin mb-4" />
                <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-[#079d9a]" />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] animate-pulse">Scanning Live Skies...</p>
        </div>
    );

    if (error) return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white px-6 text-center">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Connection Failed</h3>
            <p className="text-slate-500 mt-2 max-w-xs mx-auto font-medium">{error}</p>
            <button
                onClick={() => window.location.href = '/'}
                className="mt-8 bg-slate-900 text-white px-10 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#079d9a] transition-all"
            >
                Back to Search
            </button>
        </div>
    );

    const getRecommendedFlights = () => {
        const activeDate = searchDate || new Date().toISOString().split('T')[0];
        let results: any[] = [];
        
        // 1. If searching for specific route
        if (origin && destination) {
            const matches = FLIGHTS.filter(f => f.fromCode === origin && f.toCode === destination);
            results = [...matches];
            
            // If few matches, append popular domestic routes first, then elite International
            if (results.length < 5) {
                const popularDomestic = FLIGHTS.filter(f => f.id < 200 && f.fromCode !== origin).slice(0, 4);
                const globalElite = FLIGHTS.filter(f => f.id >= 200 && f.fromCode !== origin);
                results = [...results, ...popularDomestic, ...globalElite].slice(0, 10);
            }
        } else {
            // 2. General Page Population: Prioritize Domestic for local focus
            const popularDomestic = FLIGHTS.filter(f => f.id < 200).slice(0, 8);
            const international = FLIGHTS.filter(f => f.id >= 200);
            results = [...popularDomestic, ...international];
        }

        const airlineMap: { [key: string]: string } = {
            "Buddha Air": "U4",
            "Yeti Airlines": "YT",
            "Yeti Air": "YT",
            "Shree Airlines": "N9",
            "Nepal Airlines": "RA",
            "Tara Air": "TA",
            "Air India": "AI",
            "Qatar Airways": "QR",
            "Singapore Airlines": "SQ",
            "Thai Airways": "TG",
            "Turkish Airlines": "TK",
            "Malaysian Airlines": "MH",
            "Maldivian": "Q2"
        };

        return results.map(f => ({
            airline_iata: airlineMap[f.airline] || f.airline,
            // Inject the selected date into the fallback timing
            dep_time: `${activeDate} ${f.departureTime}`,
            arr_time: `${activeDate} ${f.arrivalTime}`,
            dep_iata: f.fromCode,
            arr_iata: f.toCode,
            duration: parseInt(f.duration) || 0,
            isStatic: true
        }));
    };

    const recommendedFlights = getRecommendedFlights();

    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-36 pb-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#079d9a]/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                    <div className="relative z-10">
                        <span className="text-[#079d9a] font-bold uppercase tracking-[0.3em] text-[10px] bg-[#079d9a]/5 px-3 py-1 rounded-full">
                            {flights.length > 0 ? "Real-time Schedules" : "Available Schedules"}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">
                            {origin && destination ? (
                                <>{getCityName(origin)} <span className="text-[#079d9a] font-light">→</span> {getCityName(destination)}</>
                            ) : (
                                <>Flight <span className="text-[#079d9a] font-light">Schedules</span></>
                            )}
                        </h1>
                        <div className="flex items-center gap-4 mt-6 py-3 px-6 bg-slate-50 rounded-2xl border border-slate-100 w-fit hover:border-[#079d9a]/30 transition-all cursor-pointer group shadow-sm">
                            <Clock className="w-5 h-5 text-[#079d9a] group-hover:scale-110 transition-transform" />
                            <div className="flex flex-col">
                                <label htmlFor="flight-date" className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5 pointer-events-none">
                                    Travel Date
                                </label>
                                <input
                                    id="flight-date"
                                    type="date"
                                    min={new Date().toISOString().split('T')[0]}
                                    value={searchDate || new Date().toISOString().split('T')[0]}
                                    onChange={(e) => handleDateChange(e.target.value)}
                                    className="bg-transparent text-sm font-black text-slate-900 focus:outline-none cursor-pointer appearance-none outline-none dark:[color-scheme:light]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                            {flights.length > 0 ? "Live Deals Found" : "Current Availability"}
                        </p>
                        <p className="text-5xl font-black text-[#079d9a]">{flights.length > 0 ? flights.length : recommendedFlights.length}</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {(() => {
                        const filteredLiveFlights = searchDate
                            ? flights.filter(f => f.dep_time.startsWith(searchDate))
                            : flights;

                        if (filteredLiveFlights.length > 0) {
                            return filteredLiveFlights.map((f, i) => (
                                <div key={i} className="bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 hover:shadow-2xl hover:border-[#079d9a]/20 transition-all duration-500 group relative overflow-hidden">
                                    {/* Airline Branding */}
                                    <div className="flex items-center gap-6 min-w-fit lg:pr-10 lg:border-r border-slate-50 w-full lg:w-auto">
                                        <div className="h-20 w-20 rounded-2xl bg-white shadow-inner flex items-center justify-center border border-slate-100 p-2 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                                            <img
                                                src={getAirlineLogo(f.airline_iata)}
                                                alt={f.airline_iata}
                                                className="w-full h-full object-contain"
                                                onError={(e) => { (e.target as HTMLImageElement).src = '/Jetset_logo.png' }}
                                            />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-900 text-xl tracking-tight leading-none mb-1">{getAirlineName(f.airline_iata)}</p>
                                            <p className="text-[10px] font-bold text-[#079d9a] uppercase tracking-widest">{f.flight_iata || f.flight_number}</p>
                                        </div>
                                    </div>

                                    {/* Main Flight Path */}
                                    <div className="flex flex-1 items-center justify-between w-full max-w-2xl px-2 md:px-10">
                                        <div className="text-center sm:text-left">
                                            <p className="text-[9px] font-bold text-[#079d9a] uppercase tracking-widest mb-1 italic">Departure</p>
                                            <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">{formatTime(f.dep_time)}</p>
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{getCityName(f.dep_iata)}</p>
                                        </div>

                                        <div className="flex-1 px-8 relative flex flex-col items-center">
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 bg-slate-50 px-3 py-1 rounded-full">
                                                {f.duration ? `${Math.floor(f.duration / 60)}h ${f.duration % 60}m` : "Direct"}
                                            </span>
                                            <div className="w-full h-[2px] bg-slate-100 relative">
                                                <div className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-slate-200 -translate-y-1/2" />
                                                <div className="absolute top-1/2 right-0 w-1.5 h-1.5 rounded-full bg-slate-200 -translate-y-1/2" />
                                                <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#079d9a] rotate-90" />
                                            </div>
                                            <p className="text-[8px] font-bold text-emerald-500 mt-2 uppercase tracking-widest">Instant Confirmation</p>
                                        </div>

                                        <div className="text-center sm:text-right">
                                            <p className="text-[9px] font-bold text-[#079d9a] uppercase tracking-widest mb-1 italic">Arrival</p>
                                            <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">{formatTime(f.arr_time)}</p>
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{getCityName(f.arr_iata)}</p>
                                        </div>
                                    </div>

                                    {/* CTA Section */}
                                    <div className="flex flex-col items-center lg:items-end gap-3 lg:pl-10 lg:border-l border-slate-50 w-full lg:w-auto">
                                        <div className="text-center lg:text-right">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Current Fare</p>
                                            <p className="text-xs font-bold text-[#079d9a] bg-[#079d9a]/5 px-3 py-1 rounded-full uppercase tracking-tighter">Pricing Inquiry Required</p>
                                        </div>
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.waPhone}&text=${encodeURIComponent(`*Flight Inquiry*\n*Airline:* ${f.airline_iata}\n*Flight:* ${f.flight_iata || f.flight_number}\n*Route:* ${f.dep_iata} → ${f.arr_iata}\n*Date/Time:* ${f.dep_time}\n\nPlease check availability and provide the current fare.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full"
                                        >
                                            <button className="w-full bg-[#079d9a] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-[#079d9a]/10 flex items-center justify-center gap-2">
                                                <MessageCircle className="w-4 h-4" /> Check Availability
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ));
                        }

                        if (recommendedFlights.length > 0) {
                            return (
                                <>
                                    <div className="flex items-center gap-4 mb-10 px-4">
                                        <div className="h-px flex-1 bg-slate-100" />
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-[10px] font-black text-[#079d9a] uppercase tracking-[0.4em] text-center">
                                                {origin && destination ? "Route Recommendations" : "Trending Global Portals"}
                                            </span>
                                            <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">
                                                {origin && destination ? `Premier Service for ${getCityName(origin)} to ${getCityName(destination)}` : "Verified Scheduled Services"}
                                            </span>
                                        </div>
                                        <div className="h-px flex-1 bg-slate-100" />
                                    </div>
                                    {recommendedFlights.map((f: any, i) => (
                                        <div key={`rec-${i}`} className="bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 hover:shadow-2xl hover:border-[#079d9a]/20 transition-all duration-500 group relative overflow-hidden">
                                            {/* Airline Branding */}
                                            <div className="flex items-center gap-6 min-w-fit lg:pr-10 lg:border-r border-slate-50 w-full lg:w-auto">
                                                <div className="h-20 w-20 rounded-2xl bg-white shadow-inner flex items-center justify-center border border-slate-100 p-2 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                                                    <img
                                                        src={getAirlineLogo(f.airline_iata)}
                                                        alt={f.airline_iata}
                                                        className="w-full h-full object-contain"
                                                        onError={(e) => { (e.target as HTMLImageElement).src = '/Jetset_logo.png' }}
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-black text-slate-900 text-xl tracking-tight leading-none mb-1">{getAirlineName(f.airline_iata)}</p>
                                                    <p className="text-[10px] font-bold text-[#079d9a] uppercase tracking-widest">Scheduled Service</p>
                                                </div>
                                            </div>

                                            {/* Main Flight Path */}
                                            <div className="flex flex-1 items-center justify-between w-full max-w-2xl px-2 md:px-10">
                                                <div className="text-center sm:text-left">
                                                    <p className="text-[9px] font-bold text-[#079d9a] uppercase tracking-widest mb-1 italic">Departure</p>
                                                    <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">{formatTime(f.dep_time)}</p>
                                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{getCityName(f.dep_iata)}</p>
                                                </div>

                                                <div className="flex-1 px-8 relative flex flex-col items-center">
                                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 bg-slate-50 px-3 py-1 rounded-full">
                                                        Direct
                                                    </span>
                                                    <div className="w-full h-[2px] bg-slate-100 relative">
                                                        <div className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-slate-200 -translate-y-1/2" />
                                                        <div className="absolute top-1/2 right-0 w-1.5 h-1.5 rounded-full bg-slate-200 -translate-y-1/2" />
                                                        <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#079d9a] rotate-90" />
                                                    </div>
                                                    <p className="text-[8px] font-bold text-emerald-500 mt-2 uppercase tracking-widest">Available Now</p>
                                                </div>

                                                <div className="text-center sm:text-right">
                                                    <p className="text-[9px] font-bold text-[#079d9a] uppercase tracking-widest mb-1 italic">Arrival</p>
                                                    <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">{formatTime(f.arr_time)}</p>
                                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{getCityName(f.arr_iata)}</p>
                                                </div>
                                            </div>

                                            {/* CTA Section */}
                                            <div className="flex flex-col items-center lg:items-end gap-3 lg:pl-10 lg:border-l border-slate-50 w-full lg:w-auto">
                                                <div className="text-center lg:text-right">
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Current Fare</p>
                                                    <p className="text-xs font-bold text-[#079d9a] bg-[#079d9a]/5 px-3 py-1 rounded-full uppercase tracking-tighter">Pricing Inquiry Required</p>
                                                </div>
                                                <a
                                                    href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.waPhone}&text=${encodeURIComponent(`*Flight Inquiry*\n*Airline:* ${getAirlineName(f.airline_iata)}\n*Route:* ${getCityName(f.dep_iata)} → ${getCityName(f.arr_iata)}\n*Date:* ${displayDate}\n*Time:* ${f.dep_time}\n\nPlease check availability and provide the current fare.`)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full"
                                                >
                                                    <button className="w-full bg-[#079d9a] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-[#079d9a]/10 flex items-center justify-center gap-2">
                                                        <MessageCircle className="w-4 h-4" /> Check Availability
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            );
                        }

                        return (
                            <div className="text-center py-40 bg-white rounded-[3rem] border-2 border-dashed border-slate-100 flex flex-col items-center">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-8">
                                    <Plane className="w-10 h-10 text-slate-200 -rotate-45" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Sky is wide open!</h3>
                                <p className="text-slate-400 max-w-sm mx-auto mt-2 font-medium">No live commercial flights found for this specific route and timing. We recommend trying international routes like <b>LHR to DXB</b> for a quick preview.</p>
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="mt-10 bg-slate-900 text-white px-10 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-[#079d9a] transition-all"
                                >
                                    Start New Search
                                </button>
                            </div>
                        );
                    })()}
                </div>
            </div>
        </main>
    );
}

export default function TicketingPage() {
    return (
        <Suspense fallback={
            <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
                <Loader2 className="w-12 h-12 text-[#079d9a] animate-spin mb-4" />
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Loading Flight Center...</p>
            </div>
        }>
            <TicketingContent />
        </Suspense>
    );
}