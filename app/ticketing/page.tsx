import { AIRPORTS, FLIGHTS } from "@/libs/data";
import { Plane, Calendar, Users, MapPin, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function TicketingPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const params = await searchParams;

    // Extract data from URL
    const originCode = params.origin;
    const destCode = params.destination;
    const travelerCount = params.travelers || "1";
    const seatClass = params.class || "Economy";
    const date = params.date ? new Date(params.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Any Date";

    // Filtering Logic
    const filteredFlights = FLIGHTS.filter(flight => {
        const matchesDest = !destCode || flight.toCode === destCode;
        const matchesOrigin = !originCode || flight.fromCode === originCode;
        return matchesDest && matchesOrigin;
    });

    const originCity = originCode ? AIRPORTS.find(a => a.id === originCode)?.city : "Anywhere";
    const destCity = destCode ? AIRPORTS.find(a => a.id === destCode)?.city : "Anywhere";

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Search Header Summary */}
                <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Flight Tickets</h1>
                        <div className="flex flex-wrap gap-4 text-slate-500 text-sm font-semibold">
                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#079d9a]" /> {originCity} to {destCity}</span>
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#079d9a]" /> {date}</span>
                            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[#079d9a]" /> {travelerCount} Travelers</span>
                            <span className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-[#079d9a]" /> {seatClass}</span>
                        </div>
                    </div>
                </div>

                {/* Sort / Filter Bar */}
                {filteredFlights.length > 0 && (
                    <div className="flex justify-between items-center mb-6 px-2">
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{filteredFlights.length} Flights Found</span>
                        <select className="bg-white border outline-none border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold text-slate-700">
                            <option>Cheapest First</option>
                            <option>Fastest First</option>
                            <option>Earliest Take-off</option>
                        </select>
                    </div>
                )}

                {/* Flights List */}
                <div className="space-y-6">
                    {filteredFlights.map((flight) => (
                        <div key={flight.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-[#079d9a]/20 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                                {/* Airline & Times */}
                                <div className="flex-1 flex items-center justify-between w-full">
                                    <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                            <Plane className="h-6 w-6 text-slate-300" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-lg">{flight.departureTime}</p>
                                            <p className="text-xs font-semibold text-slate-400 uppercase">{flight.fromCode}</p>
                                        </div>
                                    </div>

                                    {/* Flight Line */}
                                    <div className="flex flex-col items-center flex-1 px-8 text-center">
                                        <span className="text-xs font-bold text-slate-400 mb-1">{flight.duration}</span>
                                        <div className="w-full flex items-center">
                                            <div className="h-[2px] w-full bg-slate-200 rounded-full relative">
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                                                    <Clock className="w-4 h-4 text-slate-300" />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold text-[#079d9a] mt-2 uppercase tracking-widest">{flight.stops}</span>
                                    </div>

                                    <div className="text-right">
                                        <p className="font-bold text-slate-900 text-lg">{flight.arrivalTime}</p>
                                        <p className="text-xs font-semibold text-slate-400 uppercase">{flight.toCode}</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="hidden md:block w-px h-16 bg-slate-100"></div>

                                {/* Price & Action */}
                                <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4">
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest text-left md:text-right mb-1">From</p>
                                        <p className="text-2xl font-black text-[#079d9a]">{flight.price}</p>
                                    </div>
                                    <a 
                                        href={`https://api.whatsapp.com/send?phone=9779848387433&text=${encodeURIComponent(`*Flight Inquiry*\n*From:* ${flight.fromCode}\n*To:* ${flight.toCode}\n*Airline:* ${flight.airline}\n*Time:* ${flight.departureTime}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="bg-[#079d9a] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#068a87] transition-colors flex items-center gap-2">
                                            Book Now <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </a>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="mt-6 pt-4 border-t border-slate-50 flex gap-3 text-xs font-semibold text-slate-500">
                                <span className="bg-slate-50 px-3 py-1 rounded-md">{flight.airline}</span>
                                <span className="bg-slate-50 px-3 py-1 rounded-md">{seatClass}</span>
                                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-md">Baggage included</span>
                            </div>
                        </div>
                    ))}

                    {/* Empty State */}
                    {filteredFlights.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-[2rem] border border-slate-100">
                            <Plane className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">No Flights Found</h3>
                            <p className="text-slate-500">Try adjusting your travel dates or destinations.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
