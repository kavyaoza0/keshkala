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
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          {/* Decorative Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-accent" />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-accent text-sm tracking-[0.3em] uppercase font-body"
            >
              Est. 1952
            </motion.span>
            <span className="w-12 h-px bg-accent" />
          </motion.div>

          {/* Business Name with 3D effect */}
          <motion.h1 
            initial={{ opacity: 0, z: -100, rotateY: -15 }}
            animate={{ opacity: 1, z: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 tracking-tight"
            style={{ transformStyle: "preserve-3d" }}
          >
            Kesh Kala
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-foreground/90 font-heading italic mb-2"
          >
            The Hair Studio
          </motion.p>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-accent text-sm md:text-base tracking-[0.15em] uppercase mt-6 mb-8"
          >
            Premium Grooming & Expert Styling Since 1952
          </motion.p>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-body"
          >
            Where decades of heritage meet modern expertise. Experience 
            personalized grooming excellence in the heart of Ahmedabad.
          </motion.p>

          {/* CTA Buttons with 3D hover */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="tel:+919825887046"
              whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="btn-gold px-8 py-4 rounded flex items-center gap-3 text-base"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Phone size={18} />
              Book Your Appointment
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=Shop+No.+255,+Medical+Complex,+Near+Paras+Nagar,+Sola+Road,+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotateY: -5, z: 20 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="btn-outline-gold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-4 rounded flex items-center gap-3 text-base"
              style={{ transformStyle: "preserve-3d" }}
            >
              <MapPin size={18} />
              Visit Us in Paras Nagar
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
