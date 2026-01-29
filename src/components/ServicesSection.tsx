import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Wind, Sparkles, Heart } from "lucide-react";

const services = [
  {
    category: "Hair Styling",
    icon: Scissors,
    items: ["Professional Haircuts", "Hair Styling", "Blow-Dry"],
  },
  {
    category: "Chemical Treatments",
    icon: Sparkles,
    items: ["Hair Straightening", "Hair Rebonding", "Hair Smoothening"],
  },
  {
    category: "Grooming",
    icon: Wind,
    items: ["Expert Shaving", "Beard Styling", "Beard Trimming"],
  },
  {
    category: "Specialized Services",
    icon: Heart,
    items: ["Hair Extensions", "Hair Spa & Scalp Treatments"],
  },
];

const faceServices = {
  category: "Face & Skin Care",
  items: ["Facials", "De-Tan (Face & Neck)", "Face Massages"],
};

const ServicesSection = () => {
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
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our Services
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience premium grooming services tailored to the modern gentleman
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" style={{ perspective: 1200 }}>
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 50, rotateX: 25, z: -100 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, z: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * index, type: "spring", stiffness: 80 }}
              whileHover={{ 
                y: -15, 
                rotateY: 8,
                z: 50,
                boxShadow: "0 25px 50px -15px rgba(0,0,0,0.15)" 
              }}
              className="card-premium rounded p-6 text-center group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-16 h-16 mx-auto mb-5 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300"
              >
                <service.icon size={28} className="text-accent" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                {service.category}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                    className="text-muted-foreground text-sm"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Face & Skin Care - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-premium rounded p-8 text-center"
        >
          <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
            {faceServices.category}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {faceServices.items.map((item) => (
              <span
                key={item}
                className="px-6 py-2 bg-secondary rounded text-muted-foreground text-sm border border-border/50"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
