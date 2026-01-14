import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import plot1 from "@/assets/plot-1.jpg";
import plot2 from "@/assets/plot-2.jpg";
import plot3 from "@/assets/plot-3.jpg";
import plot4 from "@/assets/plot-4.jpg";
import plot5 from "@/assets/plot-5.jpg";
import plot6 from "@/assets/plot-6.jpg";

const properties = [
  {
    image: plot1,
    title: "Prime Agricultural Land - Thika",
    location: "Thika, Kiambu",
    distance: "10 mins from Thika Town",
    price: "Ksh 850,000",
    size: "1/8 Acre",
  },
  {
    image: plot2,
    title: "Scenic Countryside Plot - Machakos",
    location: "Machakos",
    distance: "45 mins from Nairobi",
    price: "Ksh 650,000",
    size: "1/4 Acre",
  },
  {
    image: plot3,
    title: "Highland View Estate - Nanyuki",
    location: "Nanyuki, Laikipia",
    distance: "Near Mt. Kenya",
    price: "Ksh 1,200,000",
    size: "1/2 Acre",
  },
  {
    image: plot4,
    title: "Residential Plot - Juja",
    location: "Juja, Kiambu",
    distance: "20 mins from CBD",
    price: "Ksh 980,000",
    size: "1/8 Acre",
  },
  {
    image: plot5,
    title: "Fertile Farmland - Thika",
    location: "Thika, Kiambu",
    distance: "15 mins from Thika Town",
    price: "Ksh 750,000",
    size: "1/4 Acre",
  },
  {
    image: plot6,
    title: "Coastal Paradise - Malindi",
    location: "Malindi, Kilifi",
    distance: "Beach Access",
    price: "Ksh 1,500,000",
    size: "1/4 Acre",
  },
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-forest font-semibold text-sm uppercase tracking-wider">
            Investment Opportunities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Featured Plots
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our hand-picked selection of prime land parcels across Kenya. 
            All plots come with verified title deeds and ready for transfer.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={property.title} {...property} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2 border-forest text-forest hover:bg-forest hover:text-primary-foreground">
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
