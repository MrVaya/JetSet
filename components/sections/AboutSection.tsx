import Image from "next/image";

const stats = [
    { label: "Flight Destinations", val: "50+" },

    { label: "Elite Transportation", val: "10" },
    { label: "We help to find your dream place", val: "60+" },
];

export default function AboutSection() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* LEFT SIDE: CREATIVE PILL IMAGE GALLERY */}
                <div className="relative flex items-center justify-center h-[500px] md:h-[600px]">

                    {/* Image 1: Far Left (Tallest) */}
                    <div className="relative w-[140px] md:w-[200px] h-[80%] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10 transition-transform hover:scale-105 duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80"
                            alt="Traveler with luggage"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Image 2: Middle (Lower) */}
                    <div className="relative w-[140px] md:w-[200px] h-[60%] rounded-full overflow-hidden border-8 border-white shadow-2xl z-20 -ml-12 mt-32 transition-transform hover:scale-105 duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80"
                            alt="Boat on clear water"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Image 3: Far Right (Higher) */}
                    <div className="relative w-[140px] md:w-[200px] h-[70%] rounded-full overflow-hidden border-8 border-white shadow-2xl z-0 -ml-12 -mt-20 transition-transform hover:scale-105 duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
                            alt="Beautiful mountain lake"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE: CONTENT & STATS */}
                <div className="flex flex-col text-left">
                    <span className="text-[#2a6a62] font-bold text-sm uppercase tracking-widest mb-4">
                        About
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                        Plan your perfect trip
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-12">
                        Are you looking for an adventurous travel, or just carrying your work alongside you while you travel and explore new places, then your perfect trip is one with us. Phnes travels help you search flights & places, book your most convenient hotels/places at your comfort while we help you discover the world. Welcome to a new dispensation.
                    </p>

                    {/* Stats Grid (2x2) */}
                    <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col">
                                <span className="text-4xl font-bold text-[#2a6a62] mb-2 tracking-tighter">
                                    {stat.val}
                                </span>
                                <span className="text-sm font-semibold text-slate-400 uppercase tracking-tight max-w-[150px]">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}