import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import HeroSection from "./sections/HeroSection";
import QualityTrustSection from "./sections/QualityTrustSection";
import StickyShowcaseSection from "./sections/StickyShowcaseSection";
import HorizontalCardsSection from "./sections/HorizontalCardsSection";
import SplitRevealSection from "./sections/SplitRevealSection";
import OutroSection from "./sections/OutroSection";
import ContactSection from "./sections/ContactSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import MachinesSection from "./components/MachinesSection";
import ManufacturingProcessSection from "./components/ManufacturingProcessSection";
import WhyChooseSection from "./components/WhyChooseSection";
import IndustriesSection from "./components/IndustriesSection";

function App() {
  return (
    <main className="w-full bg-white">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <QualityTrustSection />
      <StickyShowcaseSection />
      <HorizontalCardsSection />
      <SplitRevealSection />
      <AboutSection />
      <ProductsSection />
      <MachinesSection />
      <ManufacturingProcessSection />
      <WhyChooseSection />

      <IndustriesSection />
      <OutroSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
