"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Car, MapPin, Calendar } from "lucide-react";

export default function SearchTabs() {
    return (
        <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-transparent mb-4">
                <TabsTrigger value="flights" className="text-white data-[state=active]:bg-emerald-700">
                    <Plane className="mr-2 h-4 w-4" /> Flights
                </TabsTrigger>
                <TabsTrigger value="vehicles" className="text-white data-[state=active]:bg-emerald-700">
                    <Car className="mr-2 h-4 w-4" /> Vehicles
                </TabsTrigger>
            </TabsList>

            <TabsContent value="flights" className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 items-end">
                <div className="text-left">
                    <label className="text-xs font-bold text-emerald-500 uppercase">From</label>
                    <input type="text" placeholder="Origin City" className="w-full bg-slate-900/50 text-white border-b border-gray-500 p-2 focus:outline-none focus:border-emerald-500" />
                </div>
                <div className="text-left">
                    <label className="text-xs font-bold text-emerald-500 uppercase">To</label>
                    <input type="text" placeholder="Destination" className="w-full bg-slate-900/50 text-white border-b border-gray-500 p-2 focus:outline-none focus:border-emerald-500" />
                </div>
                <div className="text-left">
                    <label className="text-xs font-bold text-emerald-500 uppercase">Date</label>
                    <input type="date" className="w-full bg-slate-900/50 text-white border-b border-gray-500 p-2 focus:outline-none focus:border-emerald-500" />
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition">
                    Search Flights
                </button>
            </TabsContent>

            <TabsContent value="vehicles" className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 items-end">
                <div className="text-left">
                    <label className="text-xs font-bold text-emerald-500 uppercase">Type</label>
                    <select className="w-full bg-slate-900/50 text-white border-b border-gray-500 p-2 focus:outline-none focus:border-emerald-500">
                        <option>SUV</option>
                        <option>Van</option>
                        <option>Premium Car</option>
                    </select>
                </div>
                <div className="text-left">
                    <label className="text-xs font-bold text-emerald-500 uppercase">Pickup Location</label>
                    <input type="text" placeholder="Airport or City" className="w-full bg-slate-900/50 text-white border-b border-gray-500 p-2 focus:outline-none focus:border-emerald-500" />
                </div>
                <div className="text-left">
                    <label className="text-xs font-bold text-emerald-500 uppercase">Duration</label>
                    <input type="number" placeholder="Days" className="w-full bg-slate-900/50 text-white border-b border-gray-500 p-2 focus:outline-none focus:border-emerald-500" />
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition">
                    Check Availability
                </button>
            </TabsContent>
        </Tabs>
    );
}