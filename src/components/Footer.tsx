import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scissors size={24} className="text-accent" />
            <span className="font-heading text-2xl font-bold text-primary-foreground">
              Kesh Kala
            </span>
          </div>
          
          <p className="text-primary-foreground/60 text-sm mb-6">
            The Hair Studio • Premium Grooming Since 1952
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-accent/30 mx-auto mb-6" />

          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Kesh Kala. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 text-xs mt-2">
            Part of the legacy Kesh Kala brand family
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
