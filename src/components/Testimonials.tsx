import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James Mwangi",
    location: "Nairobi, Kenya",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Biashara Vault made my dream of owning land a reality. The process was transparent, and I received my title deed within 2 weeks. Highly recommended!",
  },
  {
    id: 2,
    name: "Grace Wanjiku",
    location: "Mombasa, Kenya",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "As someone in the diaspora, I was skeptical about buying land remotely. But their team guided me every step, even arranged a virtual site visit. Now I own a beautiful plot in Malindi!",
  },
  {
    id: 3,
    name: "Peter Ochieng",
    location: "Kisumu, Kenya",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    text: "The title deed ready guarantee gave me confidence. No hidden fees, no surprises. Just professional service from start to finish.",
  },
  {
    id: 4,
    name: "Mary Akinyi",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
    text: "Living abroad, I needed a trustworthy partner. Biashara Vault exceeded my expectations. Their WhatsApp support is incredible!",
  },
];

const Testimonials = () => {
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
          <span className="badge-gold mb-4 inline-block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied landowners who trusted us with their investment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-gold fill-gold"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
