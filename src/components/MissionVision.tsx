import { Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="section-padding bg-forest-dark text-primary-foreground">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge-gold mb-4 inline-block">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Mission & Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-forest-light/30 rounded-xl p-8 text-center border border-forest-light/50"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To democratize land ownership in Kenya by providing verified, 
              title-deed ready plots at affordable prices, making property 
              investment accessible to every Kenyan, whether home or abroad.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-forest-light/30 rounded-xl p-8 text-center border border-forest-light/50"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To be Kenya's most trusted real estate partner, known for 
              transparency, integrity, and excellence in land investment 
              solutions for generations to come.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-forest-light/30 rounded-xl p-8 text-center border border-forest-light/50"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Integrity in every transaction. Transparency at every step. 
              Customer satisfaction as our priority. Building lasting 
              relationships based on trust and mutual respect.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
