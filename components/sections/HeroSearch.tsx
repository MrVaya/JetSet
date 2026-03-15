"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { format } from "date-fns";
import {
    MapPin, PlaneTakeoff, Calendar as CalendarIcon,
    Users, Search, Loader2, Minus, Plus, Check, Car, Plane
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { AIRPORTS } from "@/lib/data";

export default function HeroSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // --- STATE ---
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("flights");

    // Flight States
    const [origin, setOrigin] = useState(searchParams.get("origin") || "");
    const [destination, setDestination] = useState(searchParams.get("destination") || "");
    const [date, setDate] = useState<Date | undefined>(
        searchParams.get("date") ? new Date(searchParams.get("date")!) : undefined
    );
    const [travelers, setTravelers] = useState({
        count: parseInt(searchParams.get("travelers") || "1"),
        class: searchParams.get("class") || "Economy"
    });

    // Vehicle States
    const [rentalLocation, setRentalLocation] = useState("");
    const [rentalDate, setRentalDate] = useState<Date | undefined>(undefined);

    // --- SEARCH HANDLER ---
    const handleSearch = () => {
        if (activeTab === "flights") {
            if (!origin || !destination) {
                alert("Please select both Origin and Destination");
                return;
            }
            setIsLoading(true);

            const params = new URLSearchParams();
            params.set("origin", origin);
            params.set("destination", destination);
            if (date) params.set("date", date.toISOString());
            params.set("travelers", travelers.count.toString());
            params.set("class", travelers.class);

            setTimeout(() => {
                router.push(`/ticketing?${params.toString()}`);
            }, 800);
        } else {
            // Vehicle search logic
            if (!rentalLocation) {
                alert("Please select a pick-up location");
                return;
            }
            setIsLoading(true);
            const params = new URLSearchParams();
            params.set("location", rentalLocation);
            if (rentalDate) params.set("date", rentalDate.toISOString());
            params.set("type", "vehicle");

            setTimeout(() => {
                router.push(`/services?${params.toString()}`);
            }, 800);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto space-y-6">
            <div className="flex justify-center">
                <Tabs defaultValue="flights" className="w-auto" onValueChange={setActiveTab}>
                    <TabsList className="bg-white/20 backdrop-blur-md border border-white/30 p-1 rounded-full shadow-lg">
                        <TabsTrigger
                            value="flights"
                            className="rounded-full px-8 py-2.5 data-[state=active]:bg-[#079d9a] data-[state=active]:text-white transition-all duration-300 gap-2 font-bold"
                        >
                            <Plane className="h-4 w-4" /> Flights
                        </TabsTrigger>
                        <TabsTrigger
                            value="vehicles"
                            className="rounded-full px-8 py-2.5 data-[state=active]:bg-[#079d9a] data-[state=active]:text-white transition-all duration-300 gap-2 font-bold"
                        >
                            <Car className="h-4 w-4" /> Vehicle Rental
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <div className="flex flex-col md:flex-row bg-white rounded-2xl md:rounded-full shadow-2xl p-2 border border-slate-100 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                {activeTab === "flights" ? (
                    <>
                        {/* FLIGHT SEARCH FIELDS */}
                        <LocationPicker
                            label="Origin"
                            value={origin}
                            setValue={setOrigin}
                            icon={<MapPin className="h-5 w-5 text-slate-300" />}
                            placeholder="Where from?"
                        />

                        <LocationPicker
                            label="Destination"
                            value={destination}
                            setValue={setDestination}
                            icon={<PlaneTakeoff className="h-5 w-5 text-slate-300" />}
                            placeholder="Where to?"
                        />

                        <div className="flex-1 px-6 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex items-center gap-3">
                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Departure</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button className="flex items-center gap-2 w-full text-sm font-semibold text-slate-700 h-6">
                                            <CalendarIcon className="h-4 w-4 text-[#079d9a]" />
                                            {date ? format(date, "MMM dd, yyyy") : <span className="text-slate-300">Pick a date</span>}
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-white border-none shadow-2xl" align="center">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                                            className="bg-white text-slate-900 rounded-xl"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <div className="flex-1 px-6 py-2 flex items-center gap-3 md:border-r border-slate-100">
                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Travelers & Class</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button className="flex items-center gap-2 w-full text-sm font-semibold text-slate-700 h-6">
                                            <Users className="h-4 w-4 text-[#079d9a]" />
                                            <span className="truncate">{travelers.count} Traveler, {travelers.class}</span>
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-64 p-5 bg-white border-none shadow-2xl rounded-2xl" align="center">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-bold text-slate-800">Travelers</span>
                                                <div className="flex items-center gap-3">
                                                    <button onClick={() => setTravelers({ ...travelers, count: Math.max(1, travelers.count - 1) })} className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="text-sm font-bold">{travelers.count}</span>
                                                    <button onClick={() => setTravelers({ ...travelers, count: travelers.count + 1 })} className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="pt-4 border-t border-slate-50">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Class</p>
                                                <div className="flex flex-col gap-1">
                                                    {["Economy", "Business", "First"].map((c) => (
                                                        <button
                                                            key={c}
                                                            onClick={() => setTravelers({ ...travelers, class: c })}
                                                            className={cn("text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all",
                                                                travelers.class === c ? "bg-[#079d9a] text-white" : "hover:bg-slate-50 text-slate-500")}
                                                        >
                                                            {c}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* VEHICLE SEARCH FIELDS */}
                        <LocationPicker
                            label="Pick-up Location"
                            value={rentalLocation}
                            setValue={setRentalLocation}
                            icon={<MapPin className="h-5 w-5 text-slate-300" />}
                            placeholder="Where to pick up?"
                        />

                        <div className="flex-1 px-6 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex items-center gap-3">
                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pick-up Date</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button className="flex items-center gap-2 w-full text-sm font-semibold text-slate-700 h-6">
                                            <CalendarIcon className="h-4 w-4 text-[#079d9a]" />
                                            {rentalDate ? format(rentalDate, "MMM dd, yyyy") : <span className="text-slate-300">Pick a date</span>}
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-white border-none shadow-2xl" align="center">
                                        <Calendar
                                            mode="single"
                                            selected={rentalDate}
                                            onSelect={setRentalDate}
                                            disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                                            className="bg-white text-slate-900 rounded-xl"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <div className="flex-1 px-6 py-2 flex items-center gap-3 md:border-r border-slate-100">
                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</label>
                                <button className="flex items-center gap-2 w-full text-sm font-semibold text-slate-700 h-6">
                                    <CalendarIcon className="h-4 w-4 text-[#079d9a]" />
                                    <span>Same Day / Daily</span>
                                </button>
                            </div>
                        </div>
                    </>
                )}

                <Button
                    onClick={handleSearch}
                    disabled={isLoading}
                    className="bg-[#079d9a] hover:bg-[#068a87] text-white px-8 h-14 rounded-xl md:rounded-full font-bold shadow-lg shadow-[#079d9a]/20 m-1"
                >
                    {isLoading ? <Loader2 className="animate-spin" /> : <>Find {activeTab === "flights" ? "trip" : "vehicle"} now <Search className="ml-2 h-4 w-4" /></>}
                </Button>
            </div>
        </div>
    );
}

function LocationPicker({ label, value, setValue, icon, placeholder }: any) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex-1 px-6 py-2 border-b md:border-b-0 md:border-r border-slate-100 flex items-center gap-3">
            <div className="flex flex-col items-start w-full">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <button className="flex items-center gap-2 w-full text-sm font-semibold text-slate-700 h-6">
                            {icon}
                            <span className={cn("truncate", !value && "text-slate-300")}>
                                {value ? AIRPORTS.find(a => a.id === value)?.city || value : placeholder}
                            </span>
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0 bg-white border-none shadow-2xl rounded-xl overflow-hidden" align="start">
                        <Command className="bg-white">
                            <CommandInput placeholder={`Search ${label}...`} className="border-none focus:ring-0 text-slate-800 font-medium" />
                            <CommandList>
                                <CommandEmpty className="py-4 text-center text-xs text-slate-400">No location found.</CommandEmpty>
                                <CommandGroup heading="Suggestions" className="text-slate-400 font-bold px-2">
                                    {AIRPORTS.map((airport) => (
                                        <CommandItem
                                            key={airport.id}
                                            value={airport.id}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue);
                                                setOpen(false);
                                            }}
                                            className="flex items-center gap-3 py-3 px-3 cursor-pointer hover:bg-slate-50 rounded-lg text-slate-700 data-[selected=true]:bg-slate-50"
                                        >
                                            <MapPin className="h-4 w-4 text-slate-300" />
                                            <div className="flex flex-col">
                                                <span className="font-bold text-sm">{airport.city} ({airport.id})</span>
                                                <span className="text-[10px] text-slate-400 font-medium">{airport.name}</span>
                                            </div>
                                            <Check className={cn("ml-auto h-4 w-4 text-[#079d9a]", value === airport.id ? "opacity-100" : "opacity-0")} />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}