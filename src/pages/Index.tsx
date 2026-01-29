import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <FloatingWhatsApp />
      
      {/* Hero */}
      <HeroSection />
      
      {/* About */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* Services */}
      <section id="services">
        <ServicesSection />
      </section>
      
      {/* Why Choose Us */}
      <section id="why-us">
        <WhyChooseSection />
      </section>
      
      {/* Testimonials */}
      <section id="reviews">
        <TestimonialsSection />
      </section>
      
      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
