import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Address
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Shop No. 255, Medical Complex,<br />
                  Near Paras Nagar, Sola Road,<br />
                  Ahmedabad, Gujarat – 380063
                </p>
                <p className="text-muted-foreground/70 text-sm mt-2">
                  Nearby: Akashganga Apartment, Naranpura Vistar
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+919825887046"
                  className="text-accent hover:text-gold-light transition-colors text-lg font-medium"
                >
                  +91 98258 87046
                </a>
                <p className="text-muted-foreground/70 text-sm mt-1">
                  Click to call directly
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Operating Hours
                </h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Wednesday – Monday: <span className="text-foreground">9:30 AM – 9:00 PM</span></p>
                  <p>Tuesday: <span className="text-destructive font-medium">CLOSED</span></p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://maps.google.com/?q=Shop+No.+255,+Medical+Complex,+Near+Paras+Nagar,+Sola+Road,+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded mt-4"
            >
              <Navigation size={18} />
              Get Directions
            </motion.a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] lg:aspect-square rounded overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4772068650367!2d72.52639831496744!3d23.048999484942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ffc0000001%3A0x2bfbe96e2e9ec7b7!2sParas%20Nagar%2C%20Naranpura%20Vistar%2C%20Naranpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kesh Kala Location"
              />
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-accent" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-accent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
