import { Building2, Users, Scale, Landmark, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <section id="about" className="section-padding bg-background">
            <div className="container-wide">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="badge-gold mb-4 inline-block">Who We Are</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        About Biashara Vault
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Realtors consulting services provider that supports clients' land ownership &amp;
                        development objectives through specialized, integrity-driven services.
                    </p>
                </motion.div>

                {/* Main About Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left - Company Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-forest" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Our Company</h3>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            Biashara Vault (BV) are realtors consulting services provider that supports its clients'
                            land ownership &amp; development objectives by providing specialized services in the areas
                            of growth and project management, joint ventures, commission agents buying and selling on
                            behalf. We are a smart one-stop shop for investment solutions. Our core specialization is
                            creating true generational wealth.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            BV provides unmatched professional assistance in every stage of the process. BV is well
                            cut to meet today's challenges in land acquisition &amp; capital needs as we have a diverse
                            knowledge of the business character and environment prevailing in Kenya.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Unlike conventional land buying and selling companies, BV works with investors with little
                            else but a <strong className="text-foreground">SOUND IDEA</strong>, a{" "}
                            <strong className="text-foreground">SOLID PLAN</strong>, and a{" "}
                            <strong className="text-foreground">FIRM COMMITMENT</strong> to their venture. BV's
                            approach is to identify ideal land holdings, prepare a viable development plan, invite
                            prospective investors and joint ventures.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            BV relies on the extensive knowledge and experience of its founding partners in the fields
                            of real estate consulting, development &amp; re-development. Our partners provide services
                            including but not limited to the arranging acquisition of land, real estate finance, asset
                            finance and preparing professional development plans.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our past experience benefits today's investors. Our approach is honest and committed. And,
                            the synergy of our partnerships, networks, high integrity and focused determination help
                            make things happen for our investors and team.
                        </p>

                        {/* Core Mission Highlight */}
                        <div className="bg-forest/10 border border-forest/20 rounded-xl p-5 mt-4">
                            <p className="text-forest font-semibold text-center leading-relaxed">
                                🎯 Our core mission is to get you to own a piece of high value real estate across Kenya!
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Key Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Our Team */}
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-accent" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Our Team</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                BV has a great pool of experienced associates and a talent pool; which synergies we
                                exploit having been first registered in <strong>2017</strong>. From
                                developing comprehensive development models, concept notes, to locating ideal locations
                                for pristine living, commercial development, and any intensive farming — we are the
                                one-stop shop for all your land ownership needs, including turn-key projects.
                            </p>
                        </div>

                        {/* Our Bankers */}
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                                    <Landmark className="w-5 h-5 text-forest" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Our Bankers</h4>
                            </div>
                            <div className="space-y-1 text-muted-foreground text-sm">
                                <p className="font-semibold text-foreground">Kingdom Bank</p>
                                <p>Hurlingham Branch</p>
                            </div>
                        </div>

                        {/* Our Lawyers */}
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                                    <Scale className="w-5 h-5 text-accent" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Our Lawyers</h4>
                            </div>
                            <div className="space-y-1 text-muted-foreground text-sm">
                                <p className="font-semibold text-foreground">Wambugu &amp; Muriuki Advocates</p>
                                <p>Kose Heights, 6th Floor</p>
                                <p>Hurlingham, Nairobi, Kenya</p>
                            </div>
                        </div>

                        {/* Legal Structure */}
                        <div className="bg-forest-dark text-primary-foreground rounded-xl p-6 shadow-sm">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-sm text-primary-foreground/80 leading-relaxed">
                                        <strong className="text-accent">BIASHARA VAULT (BV)</strong> is 100% owned by{" "}
                                        <strong>BIASHARA VAULT PROPERTIES LIMITED</strong> — a body corporate registered
                                        under The Companies Act, Laws of Kenya; whose registered offices are in{" "}
                                        <strong>Nairobi, Kenya</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
