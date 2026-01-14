import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import MissionVision from "@/components/MissionVision";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import NewsUpdates from "@/components/NewsUpdates";
import DiasporaBanner from "@/components/DiasporaBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <HowItWorks />
      <MissionVision />
      <Locations />
      <Testimonials />
      <NewsUpdates />
      <DiasporaBanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
