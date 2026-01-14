import { Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DiasporaBanner = () => {
  const whatsappNumber = "254700000000";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in investing in land from abroad. Please share more details.");

  return (
    <section className="section-padding bg-forest">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-forest-light/50 text-primary-foreground/90 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Diaspora Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Investing from Abroad?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl">
              We understand the unique needs of Kenyans abroad. Our dedicated diaspora team 
              handles everything—from virtual site tours to secure payment processing and 
              title deed delivery to your doorstep.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <Button
              variant="cta"
              size="lg"
              className="gap-3 px-8 py-6 text-lg"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us Now
            </Button>
            <p className="text-primary-foreground/60 text-sm">
              Available 24/7 • All time zones
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiasporaBanner;
