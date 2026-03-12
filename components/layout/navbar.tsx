"use client";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const isScrolled = useScroll();

    return (
        <nav className= {
            cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
                isScrolled? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            )
        } >
        <div className="max-w-7xl mx-auto flex justify-between items-center" >
            <Link href="/" >
                <Image src="/logo.png" alt = "Logo" width = { 140} height = { 40} className = "brightness-0 invert" />
                    </Link>

                    < div className = "hidden md:flex gap-8 text-white font-medium" >
                        <Link href="/" className = "hover:text-emerald-500 transition" > Home </Link>
                            < Link href = "/services" className = "hover:text-emerald-500 transition" > Services </Link>
                                < Link href = "/about" className = "hover:text-emerald-500 transition" > About </Link>
                                    < Link href = "/contact" className = "hover:text-emerald-500 transition" > Contact </Link>
                                        </div>

                                        < button className = "bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition" >
                                            Book Now
                                                </button>
                                                </div>
                                                </nav>
  );
}