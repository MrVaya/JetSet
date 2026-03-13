import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="pt-32 bg-white min-h-screen text-slate-900">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Contact Info */}
                <Reveal>
                    <h2 className="text-[#2a6a62] font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
                    <h1 className="text-5xl font-bold mb-8">How can we assist <br />your journey?</h1>

                    <div className="space-y-10 mt-12">
                        {[
                            { icon: Phone, label: "Booking Line", val: "+1 (800) LUX-TRAVEL" },
                            { icon: Mail, label: "Support Email", val: "concierge@premium-travel.com" },
                            { icon: MapPin, label: "Headquarters", val: "77 Luxury Row, Dubai, UAE" },
                        ].map((item) => (
                            <div key={item.label} className="flex gap-6 items-center">
                                <div className="h-14 w-14 rounded-2xl bg-[#2a6a62]/10 border border-[#2a6a62]/20 flex items-center justify-center">
                                    <item.icon className="text-[#2a6a62] h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-slate-500 font-bold">{item.label}</p>
                                    <p className="text-xl font-medium">{item.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* Contact Form */}
                <Reveal>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl backdrop-blur-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <input placeholder="Full Name" className="bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#2a6a62] transition-all" />
                                <input placeholder="Email Address" className="bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#2a6a62] transition-all" />
                            </div>
                            <select className="w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#2a6a62] transition-all text-slate-600">
                                <option>Flight Inquiry</option>
                                <option>Vehicle Rental</option>
                                <option>Premium Package</option>
                            </select>
                            <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#2a6a62] transition-all" />

                            <Button className="w-full bg-[#2a6a62] hover:bg-[#2a6a62]/80 h-16 rounded-2xl text-lg font-bold">
                                Send Inquiry
                            </Button>
                        </form>
                    </div>
                </Reveal>

            </div>
        </main>
    );
}