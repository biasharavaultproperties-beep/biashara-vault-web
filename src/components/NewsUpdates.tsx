import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const news = [
  {
    id: 1,
    title: "New Phase Launch: Malindi Beachfront Plots Now Available",
    excerpt: "We're excited to announce the launch of our premium beachfront plots in Malindi, just 5 minutes from the ocean.",
    date: "January 10, 2026",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
    category: "New Listing",
  },
  {
    id: 2,
    title: "Site Visit Weekend: Thika Properties Tour",
    excerpt: "Join us this Saturday for a guided tour of our Thika properties. Transport provided from Nairobi CBD.",
    date: "January 8, 2026",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop",
    category: "Event",
  },
  {
    id: 3,
    title: "Kenya Land Market Report 2026",
    excerpt: "Our annual report on land prices and investment opportunities across Kenya is now available for download.",
    date: "January 5, 2026",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=400&h=250&fit=crop",
    category: "Report",
  },
];

const NewsUpdates = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge-gold mb-4 inline-block">Stay Updated</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            News & Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Latest news, property launches, and market insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-forest transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-forest font-medium text-sm hover:text-accent transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View All News
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsUpdates;
