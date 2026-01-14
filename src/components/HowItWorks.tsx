import { MapPinned, Car, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MapPinned,
    step: "01",
    title: "Select Your Plot",
    description: "Browse our verified listings and choose a plot that matches your budget and location preference.",
  },
  {
    icon: Car,
    step: "02",
    title: "Book a Site Visit",
    description: "Schedule a free site visit. We'll pick you up and show you the land in person—no obligations.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Get Your Title Deed",
    description: "Complete payment and receive your title deed within 14 days. Simple, transparent, secure.",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-forest font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've made land buying stress-free. Three simple steps to own your piece of Kenya.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center group"
            >
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent" />
                </div>
              )}

              {/* Icon */}
              <div className="relative mx-auto w-32 h-32 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-forest/10 transition-colors">
                <item.icon className="w-12 h-12 text-forest" />
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg shadow-gold">
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
