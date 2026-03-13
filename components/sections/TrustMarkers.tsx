export default function TrustMarkers() {
    const brands = ["Global Airways", "Car, Suvs Rentals ", "24/7 Road Assistance", "Visa Processing"];

    return (
        <section className="py-12 border-y border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {brands.map((brand) => (
                    <p key={brand} className="text-sm font-semibold tracking-widest uppercase italic text-slate-800">
                        {brand}
                    </p>
                ))}
            </div>
        </section>
    );
}