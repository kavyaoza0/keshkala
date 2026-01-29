import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Award, Baby, Smartphone } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "20+ Years of Excellence",
    description: "Trusted presence in the styling industry with decades of expertise",
  },
  {
    icon: Star,
    title: "Expert Stylists",
    description: "Professional hair and beard styling with meticulous attention to detail",
  },
  {
    icon: Star,
    title: "4.6★ Rating",
    description: "From 50+ verified Google & Justdial reviews from satisfied clients",
  },
  {
    icon: Baby,
    title: "Child-Friendly",
    description: "Welcoming environment for young gentlemen and families",
  },
  {
    icon: Smartphone,
    title: "Modern Payments",
    description: "Accepts Google Pay and NFC mobile payments for convenience",
  },
];

const WhyChooseSection = () => {
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
            The Kesh Kala Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose Us
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
          {reasons.slice(0, 3).map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40, rotateY: -20, z: -80 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0, z: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * index, type: "spring", stiffness: 100 }}
              whileHover={{ y: -12, rotateY: 8, z: 30 }}
              className="text-center p-6 group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotateZ: 15, rotateY: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                <reason.icon size={24} className="text-accent" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto" style={{ perspective: 1000 }}>
          {reasons.slice(3).map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40, rotateY: 20, z: -80 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0, z: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + 0.15 * index, type: "spring", stiffness: 100 }}
              whileHover={{ y: -12, rotateY: -8, z: 30 }}
              className="text-center p-6 group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotateZ: -15, rotateY: -180 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                <reason.icon size={24} className="text-accent" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
