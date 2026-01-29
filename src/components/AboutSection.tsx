import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Award, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-body mb-4 block">
            Our Heritage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            About Kesh Kala
          </h2>
          <div className="gold-divider mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over seven decades, <span className="text-foreground font-medium">Kesh Kala</span> has 
              been synonymous with premium men's grooming in Ahmedabad. What began as a humble 
              barbershop in 1952 has evolved into a trusted name in expert hair styling and 
              personalized grooming services.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Today, we continue this legacy with the same dedication to excellence—combining 
              time-honored techniques with modern styling expertise. Every client who walks 
              through our doors receives the personalized attention and meticulous care that 
              has defined our brand for generations.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Scissors, label: "Expert Stylists" },
                  { icon: Award, label: "Since 1952" },
                  { icon: Sparkles, label: "Premium Care" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.15, type: "spring", stiffness: 150 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center text-center p-4 cursor-pointer"
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      whileTap={{ rotate: 180 }}
                      transition={{ duration: 0.6, type: "spring" }}
                    >
                      <item.icon size={20} className="text-accent" />
                    </motion.div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-secondary rounded overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 border-2 border-accent rounded-full flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-accent">70+</span>
                  </div>
                  <p className="text-foreground font-heading text-2xl mb-2">Years of Excellence</p>
                  <p className="text-muted-foreground text-sm">
                    Serving the Ahmedabad community with pride
                  </p>
                </div>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-accent/30" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-accent/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
