import { motion } from "framer-motion";
import { MapPin, Phone, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const photos = [
  { src: "/kasarani-land-1.jpg", alt: "Kasarani plot – cleared land view 1" },
  { src: "/kasarani-land-2.jpg", alt: "Kasarani plot – cleared land view 2" },
  { src: "/kasarani-land-3.jpg", alt: "Kasarani plot – plot boundary view" },
];

const amenities = [
  "Borehole & NWSC water",
  "Sewer, electricity & tarmac access roads",
  "Developed area with schools, hospitals, malls & churches nearby",
];

const KasaraniProperty = () => {
  return (
    <section id="kasarani" className="section-padding bg-muted/20">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge-gold mb-4 inline-block">Featured Listing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Kasarani, Nairobi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Plots available: <strong className="text-foreground">36, 37, 39 &amp; 42</strong> — only 4 remaining
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left – Photos & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main photos grid */}
            <div className="grid grid-cols-2 gap-3">
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="rounded-xl object-cover w-full aspect-[4/3] col-span-2"
              />
              <img
                src={photos[1].src}
                alt={photos[1].alt}
                className="rounded-xl object-cover w-full aspect-[4/3]"
              />
              <img
                src={photos[2].src}
                alt={photos[2].alt}
                className="rounded-xl object-cover w-full aspect-[4/3]"
              />
            </div>

            {/* Plot map */}
            <div className="rounded-xl overflow-hidden border-2 border-forest/20 bg-white p-2">
              <p className="text-xs text-muted-foreground text-center mb-2 font-medium uppercase tracking-wide">
                Plot Layout Map
              </p>
              <img
                src="/kasarani-map.png"
                alt="Kasarani plot layout map showing plots 36, 37, 39 and 42"
                className="w-full rounded-lg object-contain max-h-72"
              />
            </div>
          </motion.div>

          {/* Right – Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Price badge */}
            <div className="bg-forest-dark text-primary-foreground rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">Kasarani, Nairobi</span>
              </div>
              <p className="text-4xl font-bold mb-1">Ksh 12 Million</p>
              <p className="text-primary-foreground/70 text-sm">per plot — title deed ready</p>

              <div className="mt-4 flex items-center gap-3 bg-accent/20 rounded-xl px-4 py-3">
                <Calendar className="w-5 h-5 text-accent shrink-0" />
                <p className="text-sm text-primary-foreground/90">
                  Up to <strong className="text-accent">6-month flexible payment plan</strong> available
                </p>
              </div>
            </div>

            {/* Plots available */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-foreground text-lg mb-3">Available Plot Numbers</h4>
              <div className="flex flex-wrap gap-3">
                {["36", "37", "39", "42"].map((plot) => (
                  <span
                    key={plot}
                    className="bg-forest/10 text-forest border border-forest/20 rounded-lg px-5 py-2 font-bold text-lg"
                  >
                    Plot {plot}
                  </span>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-foreground text-lg mb-4">Amenities</h4>
              <ul className="space-y-3">
                {amenities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a href="tel:+254721660966" className="block">
              <Button variant="cta" size="lg" className="w-full gap-2 text-base py-6">
                <Phone className="w-5 h-5" />
                Call to Reserve Your Plot — +254 721 660 966
              </Button>
            </a>
            <p className="text-center text-xs text-muted-foreground">
              Early Bird Easter Offer — offer runs to <strong>10th April</strong>. Limited plots only.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KasaraniProperty;
