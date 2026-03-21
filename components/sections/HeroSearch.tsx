"use client";

import React, { useState } from "react";
import {
  MapPin, PlaneTakeoff, Calendar as CalendarIcon,
  Users, Check, ChevronsUpDown, MessageSquare, Plus, Minus, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { AIRPORTS } from "@/lib/data";

export default function HeroSearch() {
  const [tab, setTab] = useState("flights");

  // States for all inputs
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  // Travelers State
  const [travelers, setTravelers] = useState(1);
  const [cabinClass, setCabinClass] = useState("Economy");

  // Duration State (for Vehicles)
  const [duration, setDuration] = useState(1);

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "9779841743706";
    const originLabel = AIRPORTS.find(a => a.id === origin)?.city || origin || "TBD";
    const destLabel = AIRPORTS.find(a => a.id === destination)?.city || destination || "TBD";
    const dateString = date ? format(date, "PPP") : "Flexible";

    let message = "";
    if (tab === "flights") {
      message = `Hello JetSet! I'd like a quote for a *Flight*. 0A✈️ *From:* ${originLabel}%0A📍 *To:* ${destLabel}%0A📅 *Date:* ${dateString}%0A👥 *Travelers:* ${travelers}%0A💺 *Class:* ${cabinClass}`;
    } else {
      message = `Hello JetSet! I'm interested in a *Vehicle Rental*.0A🚗 *Type:* Luxury SUV/Van%0A📍 *Pickup:* ${originLabel}%0A📅 *Start Date:* ${dateString}%0A⏱️ *Duration:* ${duration} Days`;
    }

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* TABS */}
      <div className="bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/10 flex gap-1">
        <button
          onClick={() => setTab("flights")}
          className={cn("px-6 py-2 rounded-full text-xs font-bold transition-all", tab === "flights" ? "bg-[#079d9a] text-white shadow-lg" : "text-white/60 hover:text-white")}
        >
          Flights
        </button>
        <button
          onClick={() => setTab("vehicles")}
          className={cn("px-6 py-2 rounded-full text-xs font-bold transition-all", tab === "vehicles" ? "bg-[#079d9a] text-white shadow-lg" : "text-white/60 hover:text-white")}
        >
          Vehicles
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white rounded-2xl md:rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center w-full max-w-6xl border border-white/20">

        {/* Origin */}
        <LocationSelector label="Origin" value={origin} setValue={setOrigin} icon={<MapPin className="h-4 w-4 text-slate-300" />} placeholder="Where from?" />

        {/* Destination */}
        <LocationSelector label="Destination" value={destination} setValue={setDestination} icon={<PlaneTakeoff className="h-4 w-4 text-slate-300" />} placeholder="Where to?" />

        {/* Date */}
        <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter block mb-1">Departure</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2 text-sm font-bold text-slate-700 w-full text-left">
                <CalendarIcon className="h-4 w-4 text-[#079d9a]" />
                {date ? format(date, "MMM dd") : <span className="text-slate-300 font-medium">Pick a date</span>}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white border-none shadow-2xl">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        {/* Dynamic Selector (Travelers or Duration) */}
        <div className="flex-1 px-6 py-3">
          {tab === "flights" ? (
            <TravelerSelector count={travelers} setCount={setTravelers} cabin={cabinClass} setCabin={setCabinClass} />
          ) : (
            <DurationSelector days={duration} setDays={setDuration} />
          )}
        </div>

        {/* ACTION BUTTON */}
        <Button
          onClick={handleWhatsAppInquiry}
          className="bg-[#079d9a] hover:bg-[#068a87] text-white px-8 h-14 rounded-xl md:rounded-full font-extrabold uppercase tracking-widest text-[10px] gap-2 shadow-lg shadow-[#079d9a]/20 shrink-0"
        >
          Check Rates <MessageSquare className="h-4 w-4 fill-white" />
        </Button>
      </div>
    </div>
  );
}

// --- ORIGIN/DESTINATION SELECTOR ---
function LocationSelector({ label, value, setValue, icon, placeholder }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter block mb-1">{label}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="flex items-center justify-between gap-2 text-sm font-bold text-slate-700 w-full group">
            <div className="flex items-center gap-2 truncate">
              {icon}
              <span className={cn("truncate", !value && "text-slate-300 font-medium")}>
                {value ? (AIRPORTS.find(a => a.id === value)?.city || value) : placeholder}
              </span>
            </div>
            <ChevronsUpDown className="h-3 w-3 text-slate-300 group-hover:text-[#079d9a]" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0 bg-white border-none shadow-2xl rounded-2xl overflow-hidden" align="start">
          <Command>
            <CommandInput placeholder={`Search ${label}...`} className="h-12 border-none" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Domestic (Nepal)">
                {AIRPORTS.filter(a => a.country === "Nepal").map((airport) => (
                  <CommandItem
                    key={airport.id}
                    onSelect={() => {
                      setValue(airport.id);
                      setOpen(false);
                    }}
                    className="flex items-center justify-between py-3 cursor-pointer"
                  >
                    <div>
                      <p className="font-bold text-slate-800">{airport.city} ({airport.id})</p>
                      <p className="text-[10px] text-slate-400">{airport.name}</p>
                    </div>
                    {value === airport.id && <Check className="h-4 w-4 text-[#079d9a]" />}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="International">
                {AIRPORTS.filter(a => a.country !== "Nepal").map((airport) => (
                  <CommandItem
                    key={airport.id}
                    onSelect={() => {
                      setValue(airport.id);
                      setOpen(false);
                    }}
                    className="flex items-center justify-between py-3 cursor-pointer"
                  >
                    <div>
                      <p className="font-bold text-slate-800">{airport.city} ({airport.id})</p>
                      <p className="text-[10px] text-slate-400">{airport.name}</p>
                    </div>
                    {value === airport.id && <Check className="h-4 w-4 text-[#079d9a]" />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// --- TRAVELER & CLASS SELECTOR ---
function TravelerSelector({ count, setCount, cabin, setCabin }: any) {
  return (
    <div className="w-full">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter block mb-1">Travelers & Class</label>
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center gap-2 text-sm font-bold text-slate-700 w-full">
            <Users className="h-4 w-4 text-[#079d9a]" />
            <span className="truncate">{count} Traveler, {cabin}</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-5 bg-white border-none shadow-2xl rounded-2xl space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-800">Count</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setCount(Math.max(1, count - 1))} className="p-1 rounded-full border border-slate-200 hover:bg-slate-50"><Minus className="h-3 w-3" /></button>
              <span className="text-sm font-bold">{count}</span>
              <button onClick={() => setCount(count + 1)} className="p-1 rounded-full border border-slate-200 hover:bg-slate-50"><Plus className="h-3 w-3" /></button>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Cabin Class</span>
            <div className="flex flex-col gap-1">
              {["Economy", "Business", "First"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCabin(c)}
                  className={cn("text-left px-3 py-2 rounded-lg text-xs font-bold transition-all", cabin === c ? "bg-[#079d9a] text-white" : "hover:bg-slate-50 text-slate-600")}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// --- DURATION SELECTOR (FOR VEHICLES) ---
function DurationSelector({ days, setDays }: any) {
  return (
    <div className="w-full">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter block mb-1">Rental Duration</label>
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center gap-2 text-sm font-bold text-slate-700 w-full">
            <Clock className="h-4 w-4 text-[#079d9a]" />
            <span>{days} Day{days > 1 ? 's' : ''}</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-5 bg-white border-none shadow-2xl rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-800">Days</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setDays(Math.max(1, days - 1))} className="p-1 rounded-full border border-slate-200 hover:bg-slate-50"><Minus className="h-3 w-3" /></button>
              <span className="text-sm font-bold">{days}</span>
              <button onClick={() => setDays(days + 1)} className="p-1 rounded-full border border-slate-200 hover:bg-slate-50"><Plus className="h-3 w-3" /></button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}