import { Shield, FileCheck, MapPin, Users, Clock, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: FileCheck,
    title: "Title Deed Ready",
    description: "All our plots come with ready title deeds. No waiting, no hidden processes.",
  },
  {
    icon: Shield,
    title: "Verified Properties",
    description: "Every property undergoes thorough verification before listing.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategic locations across Kenya with high appreciation potential.",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Join our growing family of satisfied landowners.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Complete your purchase in as little as 14 days.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is always available via WhatsApp and phone.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge-gold mb-4 inline-block">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Biashara Vault?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your land investment journey smooth, 
            secure, and successful
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-forest/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="w-7 h-7 text-forest group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
