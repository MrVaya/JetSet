import Hero from "@/components/sections/hero";
import TrustMarkers from "@/components/sections/TrustMarkers";
import PopularDestination from "@/components/sections/PopularDestination";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
import TopDestinations from "@/components/sections/TopDestinations";
import AboutSection from "@/components/sections/AboutSection";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen selection:bg-[#079d9a]/30 selection:text-[#079d9a]">
      <Hero />
      <div className="hidden md:block">
        <AboutSection />
      </div>
      {/* <TrustMarkers /> */}
      <PopularDestination />
      <TopDestinations />
      {/*<WhyChooseUs />*/}
      {/*<CTA />*/}
      <Testimonials />
    </main>
  );
}