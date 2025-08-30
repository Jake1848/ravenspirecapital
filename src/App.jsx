import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Check, 
  ChevronRight, 
  Shield, 
  CircleDollarSign, 
  Building2, 
  Truck, 
  Layers, 
  Rocket, 
  ArrowRight,
  Mail,
  MapPin,
  Calendar,
  Star,
  Menu,
  X
} from "lucide-react";
import logoImage from "./assets/logo.png";
import './App.css';

const COMPANY = {
  name: "Ravenspire Capital",
  email: "info@ravenspirecapital.com",
  city: "Charleston, SC",
  founded: "2024",
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#credibility", label: "Credibility" },
    { href: "#pillars", label: "Pillars" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#principles", label: "Principles" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'backdrop-blur-custom bg-background/80 border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-width-content container-padding">
          <div className="flex items-center justify-between py-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center font-bold text-lg transition-transform group-hover:scale-105">
                R
              </div>
              <div>
                <div className="text-lg font-bold tracking-wide">{COMPANY.name}</div>
                <div className="text-xs text-muted-foreground">Capital • Real Estate • Logistics</div>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <Button asChild className="btn-primary">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-2 w-fit">
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get in touch</a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="starfield gradient-radial section-spacing pt-32">
        <div className="max-width-content container-padding">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/10 border-white/20 text-foreground hover:bg-white/15 transition-colors">
                  Founder‑led holding company
                </Badge>
                <h1 className="heading-primary text-reveal">
                  We turn <span className="text-gradient">access to capital</span> into
                  <span className="block mt-2">durable, cash‑flowing assets.</span>
                </h1>
                <p className="text-body text-muted-foreground max-w-2xl text-reveal" style={{animationDelay: '0.2s'}}>
                  Credibility → Approvals → Disciplined deployment. Today: liquidity operations. 
                  Next: real estate & logistics.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-reveal" style={{animationDelay: '0.4s'}}>
                <Button asChild size="lg" className="btn-primary">
                  <a href="#contact">Book an intro</a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="group">
                  <a href="#services">
                    See services 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground text-reveal" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {COMPANY.city}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Est. {COMPANY.founded}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="logo-container bg-card/50 border border-border rounded-3xl p-8 backdrop-blur-sm">
                <img 
                  src={logoImage} 
                  alt="Ravenspire Capital Logo" 
                  className="w-64 h-64 object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Metrics */}
      <section id="credibility" className="py-16">
        <div className="max-width-content container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {key:"Approvals", value:"$100k–$250k", desc:"12‑mo target"},
              {key:"Net spread", value:"Positive after cost", desc:"discipline > headlines"},
              {key:"Pillars", value:"Capital • RE • Logistics", desc:"multi‑vertical"},
              {key:"Rhythm", value:"Monthly", desc:"compound & refinance"}
            ].map((metric, i) => (
              <Card key={i} className="card-hover bg-card/50 border-border backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-muted-foreground font-medium">
                    {metric.key}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.desc}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Pillars */}
      <section id="pillars" className="section-spacing">
        <div className="max-width-content container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Operating pillars</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Three interconnected verticals that create sustainable value through disciplined capital deployment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CircleDollarSign className="h-6 w-6" />,
                title: "Capital",
                items: [
                  "Business credit stacking & bank relationships",
                  "Lines of credit & term loans sequencing", 
                  "Liquidity operations (blue‑chip/stable pools) with risk limits"
                ]
              },
              {
                icon: <Building2 className="h-6 w-6" />,
                title: "Real Estate", 
                items: [
                  "Compound into BRRRR / small‑balance commercial",
                  "Cash‑flow‑first underwriting; conservative leverage",
                  "Refi, hold, and operate with discipline"
                ]
              },
              {
                icon: <Truck className="h-6 w-6" />,
                title: "Logistics",
                items: [
                  "Asset‑light ops & software for supply‑chain efficiency",
                  "Equipment financing with ROI gates", 
                  "Partnerships with carriers & warehouses"
                ]
              }
            ].map((pillar, i) => (
              <Card key={i} className="card-hover bg-card/50 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {pillar.icon}
                    </div>
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pillar.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-spacing bg-card/20">
        <div className="max-width-content container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">What we do</h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Education and operational support. We are not an investment adviser; 
              nothing here is financial, legal, or tax advice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Application sequencing & credit‑limit growth",
              "Relationship banking playbook & underwriting prep", 
              "Venue selection, custody & position sizing",
              "Record‑keeping for taxes; risk dashboards"
            ].map((service, i) => (
              <Card key={i} className="card-hover bg-card/50 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Execution over theory—built to protect downside while compounding.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section-spacing">
        <div className="max-width-content container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">How it works</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to turning credit access into cash-flowing assets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Assess",
                desc: "Entity, banking, and credit review to map fastest approvals.",
                icon: <Layers className="h-6 w-6" />,
                step: "01"
              },
              {
                title: "Stack", 
                desc: "Sequence cards/LOCs/loans without tripping risk flags.",
                icon: <Shield className="h-6 w-6" />,
                step: "02"
              },
              {
                title: "Deploy",
                desc: "Deep‑liquidity venues; net yield tracked vs cost.",
                icon: <Rocket className="h-6 w-6" />,
                step: "03"
              },
              {
                title: "Compound",
                desc: "Reinvest monthly, refinance, and scale into real assets.",
                icon: <ChevronRight className="h-6 w-6" />,
                step: "04"
              }
            ].map((step, i) => (
              <Card key={i} className="card-hover bg-card/50 border-border backdrop-blur-sm relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {step.icon}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section id="principles" className="section-spacing bg-card/20">
        <div className="max-width-content container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Operating principles</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Core values that guide every decision and deployment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              "Safety first: position sizing, diversification, custody.",
              "Net‑spread mindset: after cost, fees, and taxes.", 
              "Reputation compounder: transparent records & lender friendly."
            ].map((principle, i) => (
              <Card key={i} className="card-hover bg-card/50 border-border backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      <Star className="h-5 w-5" />
                    </div>
                    <p className="text-muted-foreground">{principle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-width-content container-padding">
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold">Ready to turn approvals into assets?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Start with a 20‑minute intro. No hype—just a plan.
                </p>
                <Button asChild size="lg" className="btn-primary">
                  <a href="#contact">Request a call</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-spacing">
        <div className="max-width-content container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Frequently asked questions</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Common questions about our approach and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-card/50 border border-border rounded-2xl backdrop-blur-sm">
              <AccordionItem value="item-1" className="accordion-item px-6">
                <AccordionTrigger className="text-left">Are you an investment adviser?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. We provide education and operational support only. Nothing here is investment, legal, or tax advice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="accordion-item px-6">
                <AccordionTrigger className="text-left">Do you promise returns?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. We optimize for positive spread after costs and durability over headline APR.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="accordion-item px-6">
                <AccordionTrigger className="text-left">How fast can capital be deployed?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Typical path is 2–6 weeks for initial approvals and a small first deployment, then scaling in disciplined tranches.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-spacing bg-card/20">
        <div className="max-width-content container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Get in touch</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Ready to explore how we can help turn your credit access into cash-flowing assets?
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="card-hover bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" action={`mailto:${COMPANY.email}`} method="post" encType="text/plain">
                  <div className="form-field">
                    <Input placeholder="Your name" required className="bg-background/50" />
                  </div>
                  <div className="form-field">
                    <Input type="email" placeholder="Your email" required className="bg-background/50" />
                  </div>
                  <div className="form-field">
                    <Textarea 
                      placeholder="How can we help?" 
                      className="min-h-[120px] bg-background/50" 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full btn-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{COMPANY.name}</div>
                      <div className="text-sm text-muted-foreground">Capital • Real Estate • Logistics</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">{COMPANY.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">{COMPANY.city}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">Founded</div>
                      <div className="text-sm text-muted-foreground">{COMPANY.founded}</div>
                    </div>
                  </div>
                </div>
                
                <Separator className="bg-border" />
                
                <div className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Disclaimer:</strong> Ravenspire Capital is not a broker‑dealer or investment adviser. 
                  Information on this site is for educational purposes only and should not be construed as 
                  financial, legal, or tax advice. Digital assets and liquidity strategies carry risk, 
                  including volatility and loss of principal.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="max-width-content container-padding py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground grid place-items-center font-bold text-sm">
                R
              </div>
              <div>
                <div className="font-semibold">{COMPANY.name}</div>
                <div className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} All rights reserved.
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#home" className="hover:text-foreground transition-colors">Top</a>
              <span className="text-muted-foreground/50">Privacy (coming soon)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
