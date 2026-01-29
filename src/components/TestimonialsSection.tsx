import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Very professional service and excellent at hairstyling and beard styling. Highly recommended.",
    author: "Verified Customer",
    rating: 5,
  },
  {
    text: "Best service and excellent treatment… keeping everything well organized and clean.",
    author: "Google Review",
    rating: 5,
  },
  {
    text: "Amazing hair cutting and also amazing customer interaction.",
    author: "Justdial Review",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-body mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            What Our Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" style={{ perspective: 1200 }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 25, rotateY: index === 1 ? 0 : (index === 0 ? 15 : -15), z: -100 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0, z: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index, type: "spring", stiffness: 80 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10, 
                rotateY: index === 1 ? 0 : (index === 0 ? -8 : 8),
                z: 50 
              }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded p-8 relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Quote className="text-accent/30 absolute top-6 right-6" size={32} />
              </motion.div>
              
              {/* Stars with 3D flip */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotateY: -180, z: -50 }}
                    animate={isInView ? { scale: 1, rotateY: 0, z: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ rotateY: 180, scale: 1.3 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Star size={16} className="text-accent fill-accent" />
                  </motion.div>
                ))}
              </div>

              <p className="text-primary-foreground/90 text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <p className="text-primary-foreground/60 text-sm font-medium">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-accent/20 px-6 py-3 rounded-full">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-accent fill-accent" />
              ))}
            </div>
            <span className="text-primary-foreground font-medium">
              4.6 Rating • 50+ Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
