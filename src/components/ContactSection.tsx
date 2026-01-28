import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-body mb-4 block">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Location & Contact
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Address */}
          <motion.div variants={itemVariants} className="text-center p-6">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center"
            >
              <MapPin size={24} className="text-accent" />
            </motion.div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              Address
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Shop No. 255, Medical Complex,<br />
              Near Paras Nagar, Sola Road,<br />
              Ahmedabad, Gujarat – 380063
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              Near Akashganga Apartment
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants} className="text-center p-6">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center"
            >
              <Phone size={24} className="text-accent" />
            </motion.div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              Phone
            </h3>
            <a
              href="tel:+919825887046"
              className="text-accent hover:text-gold-light transition-colors text-lg font-medium block"
            >
              +91 98258 87046
            </a>
            <p className="text-muted-foreground/60 text-xs mt-2">
              Click to call directly
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants} className="text-center p-6">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center"
            >
              <Clock size={24} className="text-accent" />
            </motion.div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              Hours
            </h3>
            <div className="text-muted-foreground text-sm space-y-1">
              <p>Wed – Mon: <span className="text-foreground">9:30 AM – 9:00 PM</span></p>
              <p>Tuesday: <span className="text-destructive font-medium">CLOSED</span></p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://maps.google.com/?q=Shop+No.+255,+Medical+Complex,+Near+Paras+Nagar,+Sola+Road,+Ahmedabad"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px hsl(43 50% 45% / 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="btn-gold inline-flex items-center gap-3 px-10 py-4 rounded"
          >
            <Navigation size={18} />
            Get Directions on Google Maps
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
