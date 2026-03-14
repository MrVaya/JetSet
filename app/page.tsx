"use client";

import Hero from "@/components/sections/hero";
import TrustMarkers from "@/components/sections/TrustMarkers";
import PopularDestination from "@/components/sections/PopularDestination";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
import TopDestinations from "@/components/sections/TopDestinations";
import AboutSection from "@/components/sections/AboutSection";
import Testimonials from "@/components/sections/Testimonials";
import { motion } from "framer-motion";

export default function HomePage() {
  const revealProps: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for smoothness
  };

  return (
    <main className="bg-white min-h-screen selection:bg-[#079d9a]/30 selection:text-[#079d9a]">
      <Hero />
      <motion.div {...revealProps} className="hidden md:block">
        <AboutSection />
      </motion.div>
      <motion.div {...revealProps}>
        <PopularDestination />
      </motion.div>
      <motion.div {...revealProps}>
        <TopDestinations />
      </motion.div>
      <motion.div {...revealProps}>
        <Testimonials />
      </motion.div>
    </main>
  );
}