import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="py-24 text-center px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#153834] to-[#0a1f1e] p-12 md:p-20 rounded-[3rem] shadow-3xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready for Departure?</h2>
                <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto">
                    Join 10,000+ travelers who trust us for their executive travel and luxury transport.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Button className="bg-white text-[#0a1f1e] hover:bg-gray-100 h-14 px-10 text-lg font-bold rounded-full transition-transform hover:scale-105">
                        Get a Quote
                    </Button>
                    <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-10 text-lg font-bold rounded-full transition-transform hover:scale-105">
                        Check Vehicles
                    </Button>
                </div>
            </div>
        </section>
    );
}