import { AIRPORTS, PACKAGES } from "@/libs/data";
import Image from "next/image";
import { Star, MapPin, Plane, Calendar, Users } from "lucide-react";

// This is a Server Component in Next.js 15
export default async function ServicesPage({
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

    // Mock Filtering Logic
    const filteredResults = PACKAGES.filter(trip => {
        const matchesDest = !destCode || trip.to === destCode;
        const matchesOrigin = !originCode || trip.from === originCode;
        return matchesDest && matchesOrigin;
    });

    return (
        <main className="min-h-screen bg-white pt-36 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Search Header Summary */}
                <div className="bg-[#079d9a]/5 border border-[#079d9a]/10 rounded-[2rem] p-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Available Travel Packages</h1>
                        <div className="flex flex-wrap gap-4 mt-2 text-slate-500 text-sm font-medium">
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#079d9a]" /> {originCode ? AIRPORTS.find(a => a.id === originCode)?.city : "Anywhere"} to {destCode ? AIRPORTS.find(a => a.id === destCode)?.city : "Anywhere"}</span>
                            <span className="flex items-center gap-1"><Users className="w-4 h-4 text-[#079d9a]" /> {travelerCount} Travelers</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Packages Found</p>
                        <p className="text-4xl font-black text-[#079d9a]">{filteredResults.length}</p>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResults.map((trip) => (
                        <div key={trip.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={trip.image}
                                    alt={trip.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                                    <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                                    <span className="text-xs font-bold text-slate-800">{trip.rating}</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">{trip.title}</h3>
                                    <span className="text-2xl font-black text-[#079d9a]">{trip.price}</span>
                                </div>

                                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                    {trip.duration} Premium Package including luxury accommodation and curated local experiences.
                                </p>

                                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        Instant Booking
                                    </div>
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=9779841743706&text=${encodeURIComponent(`*Booking Inquiry*\n*Package:* ${trip.title}\n*Duration:* ${trip.duration}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="bg-[#079d9a] text-white px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#068a87] transition-colors">
                                            Book Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredResults.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-xl text-slate-400">No trips found matching your exact search. Try another destination!</h3>
                    </div>
                )}
            </div>
        </main>
    );
}