import { MapPin, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  distance: string;
  price: string;
  size: string;
  isTitleReady?: boolean;
  index?: number;
}

const PropertyCard = ({
  image,
  title,
  location,
  distance,
  price,
  size,
  isTitleReady = true,
  index = 0,
}: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Title Deed Badge */}
        {isTitleReady && (
          <span className="absolute top-3 left-3 badge-gold shadow-gold">
            ✓ Title Deed Ready
          </span>
        )}
        
        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-forest transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <MapPin className="w-4 h-4 text-forest" />
          <span>{location}</span>
          <span className="text-border">•</span>
          <span>{distance}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <Ruler className="w-4 h-4 text-forest" />
          <span>Plot Size: {size}</span>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1 border-forest text-forest hover:bg-forest hover:text-primary-foreground">
            View Details
          </Button>
          <Button variant="cta" size="sm" className="flex-1">
            Book Visit
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
