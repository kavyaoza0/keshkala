import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kesh Kala Premium Barbershop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Est. 1952
            </span>
            <span className="w-12 h-px bg-accent" />
          </div>

          {/* Business Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 tracking-tight">
            Kesh Kala
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-heading italic mb-2">
            The Hair Studio
          </p>

          {/* Tagline */}
          <p className="text-accent text-sm md:text-base tracking-[0.15em] uppercase mt-6 mb-8">
            Premium Grooming & Expert Styling Since 1952
          </p>

          {/* Description */}
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            Where decades of heritage meet modern expertise. Experience 
            personalized grooming excellence in the heart of Ahmedabad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="tel:+919825887046"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold px-8 py-4 rounded flex items-center gap-3 text-base"
            >
              <Phone size={18} />
              Book Your Appointment
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=Shop+No.+255,+Medical+Complex,+Near+Paras+Nagar,+Sola+Road,+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline-gold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-4 rounded flex items-center gap-3 text-base"
            >
              <MapPin size={18} />
              Visit Us in Paras Nagar
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
