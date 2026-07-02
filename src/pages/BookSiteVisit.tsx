import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, User, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookSiteVisit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    preferredDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
Site Visit Booking Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Location: ${formData.location}
Preferred Date: ${formData.preferredDate}

Message:
${formData.message}

---
This booking was submitted through bvpke.com
    `.trim();

    const emailSubject = `Site Visit Booking - ${formData.name}`;
    
    // Open Gmail with pre-filled content
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@bvpke.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Also create mailto link as fallback
    const mailtoUrl = `mailto:info@bvpke.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Try Gmail first, fallback to mailto
    window.open(gmailUrl, '_blank');
    
    // Redirect to thank you page after short delay
    setTimeout(() => {
      window.location.href = '/booking-confirmation';
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section-padding bg-gradient-to-br from-primary via-forest to-forest-dark text-primary-foreground">
          <div className="container-wide max-w-4xl">
            <div className="text-center mb-8">
              <span className="badge-gold mb-4 inline-block">Book Your Visit</span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Schedule a Site Visit
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">Booking Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="+254 712 345 678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Preferred Location *
                    </label>
                    <select
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select a location</option>
                      <option value="Thika">Thika, Kiambu</option>
                      <option value="Nakuru">Nakuru</option>
                      <option value="Mombasa">Mombasa</option>
                      <option value="Malindi">Malindi</option>
                      <option value="Naivasha">Naivasha</option>
                      <option value="Nanyuki">Nanyuki</option>
                      <option value="Kasarani">Kasarani</option>
                      <option value="Other">Other Location</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Booking Request
                  </Button>
                </form>
              </div>

              {/* Contact Information - Below the form */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-accent/10 rounded-2xl p-6 md:p-8 border border-accent/20">
                  <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
                  <p className="text-muted-foreground mb-6">
                    You can also reach us directly through:
                  </p>
                  
                  <div className="space-y-4">
                    <a href="tel:+254721660966" className="flex items-start gap-4 p-4 bg-card rounded-lg hover:bg-accent/5 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Primary Line</p>
                        <p className="text-accent">+254 721 660 966</p>
                      </div>
                    </a>

                    <a href="tel:+254704308435" className="flex items-start gap-4 p-4 bg-card rounded-lg hover:bg-accent/5 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Secondary Line</p>
                        <p className="text-accent">+254 704 308 435</p>
                      </div>
                    </a>

                    <a href="mailto:info@bvpke.com" className="flex items-start gap-4 p-4 bg-card rounded-lg hover:bg-accent/5 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-accent break-all">info@bvpke.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Office</p>
                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-forest-light rounded-2xl p-6 md:p-8 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-3">What to Expect</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>We'll contact you within 24 hours to confirm your booking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Free transport from Nairobi CBD (for selected locations)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Professional guide will show you the properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>All documentation and title deed verification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookSiteVisit;