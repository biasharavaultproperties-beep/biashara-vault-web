import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Thika",
    region: "Central Kenya",
    plotsAvailable: 24,
    startingPrice: "Ksh 450,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
  },
  {
    name: "Nakuru",
    region: "Rift Valley",
    plotsAvailable: 18,
    startingPrice: "Ksh 380,000",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    name: "Mombasa",
    region: "Coast",
    plotsAvailable: 12,
    startingPrice: "Ksh 650,000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
  },
  {
    name: "Malindi",
    region: "Coast",
    plotsAvailable: 15,
    startingPrice: "Ksh 550,000",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop",
  },
  {
    name: "Naivasha",
    region: "Rift Valley",
    plotsAvailable: 20,
    startingPrice: "Ksh 420,000",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
  },
  {
    name: "Nanyuki",
    region: "Central Kenya",
    plotsAvailable: 10,
    startingPrice: "Ksh 580,000",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
  },
];

const Locations = () => {
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
          <span className="badge-gold mb-4 inline-block">Our Locations</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prime Locations Across Kenya
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover investment opportunities in Kenya's most promising regions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{location.region}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">{location.plotsAvailable} plots available</p>
                    <p className="text-accent font-semibold">From {location.startingPrice}</p>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
