import Hero from "@/components/sections/hero";
import PopularDestination from "@/components/sections/PopularDestination";
import TopDestinations from "@/components/sections/TopDestination";
import AboutSection from "@/components/sections/AboutSection";
import Testimonials from "@/components/sections/Testimonials";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen selection:bg-[#079d9a]/30 selection:text-[#079d9a]">
      <Hero />
      
      <RevealOnScroll className="hidden md:block">
        <AboutSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <PopularDestination />
      </RevealOnScroll>

      <RevealOnScroll>
        <TopDestinations />
      </RevealOnScroll>

      <RevealOnScroll>
        <Testimonials />
      </RevealOnScroll>
    </main>
  );
}