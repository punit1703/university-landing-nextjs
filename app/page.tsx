import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import StatsSection from "@/sections/StatsSection";
import AboutSection from "@/sections/AboutSection";
import ProgramsSection from "@/sections/ProgramsSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import GallerySection from "@/sections/GallerySection";
import Testimonials from "@/sections/Testimonials";
import CTASection from "@/sections/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <GallerySection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
