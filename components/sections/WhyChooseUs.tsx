import { Star, ShieldCheck, Plane } from "lucide-react";
import Image from "next/image";

const FEATURES = [
    { title: "Elite Service", desc: "Dedicated concierge for all your rental and booking needs.", icon: Star },
    { title: "Modern Fleet", desc: "No vehicle in our inventory is older than current year models.", icon: ShieldCheck },
    { title: "Global Reach", desc: "Book flights to over 150 destinations worldwide instantly.", icon: Plane },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#f0f8f7]/50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-[#2a6a62] font-bold uppercase tracking-[0.2em] text-sm mb-4">Why Choose Us</h2>
                    <h3 className="text-4xl font-bold mb-8 text-slate-900">Elevating Your Travel Standards</h3>
                    <div className="space-y-8">
                        {FEATURES.map((item) => (
                            <div key={item.title} className="flex gap-6">
                                <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-[#2a6a62]/10 border border-[#2a6a62]/20 flex items-center justify-center">
                                    <item.icon className="text-[#2a6a62] h-6 w-6" />
                                </div>
                                <div>
                                    <h5 className="text-xl font-bold mb-1 text-slate-900">{item.title}</h5>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image src="https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80" alt="Premium Interior" fill className="object-cover" />
                </div>
            </div>
        </section>
    );
}