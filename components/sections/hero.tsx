import SearchTabs from "./SearchTabs";

export default function Hero() {
    return (
        <section className="relative h-[90vh] w-full flex items-center justify-center">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay for readability */}
                <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
                    className="w-full h-full object-cover"
                    alt="Premium Travel"
                />
            </div>

            <div className="relative z-20 text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 italic tracking-tight">
                    Luxury Travel, <span className="text-emerald-500">Redefined.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10">
                    Premium flights and elite vehicle rentals for the modern traveler.
                </p>

                {/* The Search Bar Component */}
                <div className="bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 shadow-2xl">
                    <SearchTabs />
                </div>
            </div>
        </section>
    );
}