import { CheckCircle, Phone, Mail, Calendar, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section-padding bg-gradient-to-br from-primary via-forest to-forest-dark text-primary-foreground min-h-[80vh] flex items-center">
          <div className="container-wide max-w-3xl">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-accent" />
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Booking Request Sent!
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for your interest in Biashara Vault Properties. Your site visit booking request has been received.
              </p>

              <div className="bg-accent/10 rounded-2xl p-6 mb-8 border border-accent/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  What Happens Next?
                </h2>
                
                <div className="space-y-4 text-left">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Confirmation Call</h3>
                      <p className="text-muted-foreground text-sm">
                        Our team will contact you within 24 hours to confirm your booking details and preferred date.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Site Visit Preparation</h3>
                      <p className="text-muted-foreground text-sm">
                        We'll arrange transport (if applicable) and prepare all necessary documentation for your visit.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Guided Tour</h3>
                      <p className="text-muted-foreground text-sm">
                        Visit the property with our professional guide who will show you available plots and answer all your questions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Documentation & Purchase</h3>
                      <p className="text-muted-foreground text-sm">
                        Review title deed documentation and proceed with your investment if satisfied.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-forest-light text-primary-foreground rounded-xl p-6">
                  <Phone className="w-6 h-6 text-accent mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">Call Us Directly</h3>
                  <a href="tel:+254721660966" className="text-accent hover:underline text-sm block">
                    +254 721 660 966
                  </a>
                  <a href="tel:+254704308435" className="text-accent hover:underline text-sm block">
                    +254 704 308 435
                  </a>
                </div>

                <div className="bg-forest-light text-primary-foreground rounded-xl p-6">
                  <Mail className="w-6 h-6 text-accent mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a href="mailto:info@biasharavault.co.ke" className="text-accent hover:underline text-sm break-all">
                    info@biasharavault.co.ke
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/">
                  <Button variant="default" size="lg" className="gap-2 w-full sm:w-auto">
                    <Home className="w-4 h-4" />
                    Back to Home
                  </Button>
                </a>
                <a href="/#properties">
                  <Button variant="cta" size="lg" className="gap-2 w-full sm:w-auto">
                    View Properties
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Didn't receive a confirmation email? Check your spam folder or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookingConfirmation;