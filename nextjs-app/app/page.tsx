'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, TrendingUp, Target, Zap, Users, 
  CheckCircle, Star, Menu, X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { PartnerLogos, Services, CaseStudies, Testimonials } from '@/types';

// Animated Logo Component
const AnimatedLogo = () => {
  const letters = "LetsGrowPro".split("");
  
  return (
    <div className="flex items-center">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.1,
            duration: 0.6,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.1,
            color: "#00ff77",
            transition: { duration: 0.2 }
          }}
          className="font-heading text-lg sm:text-xl lg:text-2xl font-black text-black cursor-pointer"
        >
          {letter}
        </motion.span>
      ))}
      
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          delay: letters.length * 0.1 + 0.3,
          duration: 0.6,
          ease: "easeOut"
        }}
        className="ml-3 flex items-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            y: [0, -2, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.2,
            rotate: 15,
            transition: { duration: 0.2 }
          }}
          className="cursor-pointer"
        >
          <TrendingUp className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function HomePage() {
  const [partnerLogos, setPartnerLogos] = useState<PartnerLogos[]>([]);
  const [services, setServices] = useState<Services[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudies[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [partnersData, servicesData, caseStudiesData, testimonialsData] = await Promise.all([
          fetch('/api/partnerlogos').then(r => r.json()),
          fetch('/api/services').then(r => r.json()),
          fetch('/api/casestudies').then(r => r.json()),
          fetch('/api/testimonials').then(r => r.json())
        ]);
        
        setPartnerLogos(partnersData.items.sort((a: PartnerLogos, b: PartnerLogos) => (a.displayOrder || 0) - (b.displayOrder || 0)));
        setServices(servicesData.items.slice(0, 4));
        setCaseStudies(caseStudiesData.items.slice(0, 3));
        setTestimonials(testimonialsData.items.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <AnimatedLogo />
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
              <Button>Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            >
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
              <Button className="w-full">Get Started</Button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
            >
              Transform Your Business Growth
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Data-driven strategies that deliver real results. Partner with us to unlock your business potential.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Case Studies
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose LetsGrowPro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine strategy, creativity, and data to drive measurable growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-primary" />,
                title: "Strategic Approach",
                description: "Custom strategies tailored to your unique business goals and market position"
              },
              {
                icon: <Zap className="w-12 h-12 text-primary" />,
                title: "Fast Results",
                description: "See measurable improvements in your key metrics within the first 30 days"
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Expert Team",
                description: "Work with seasoned professionals who've driven growth for 100+ companies"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {services.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions to accelerate your growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
                >
                  {service.serviceImage && (
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={service.serviceImage}
                        alt={service.serviceName || ''}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.serviceName}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.shortDescription}
                    </p>
                    {service.benefits && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.benefits.split(',').map((benefit, i) => (
                          <span key={i} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                            {benefit.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link href={service.callToActionUrl || '/contact'}>
                      <Button variant="outline" className="w-full">
                        {service.callToActionText || 'Learn More'}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {caseStudies.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real results for real businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
                >
                  {caseStudy.thumbnailImage && (
                    <div className="h-56 overflow-hidden">
                      <Image
                        src={caseStudy.thumbnailImage}
                        alt={caseStudy.caseStudyTitle || ''}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {caseStudy.industry}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {caseStudy.caseStudyTitle}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {caseStudy.challenge}
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-green-800">
                        {caseStudy.results}
                      </p>
                    </div>
                    <Link href="/case-studies">
                      <Button variant="outline" className="w-full">
                        Read Full Story
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.testimonialText}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonial.clientPhoto && (
                      <Image
                        src={testimonial.clientPhoto}
                        alt={testimonial.clientName || ''}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.clientName}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.clientTitleCompany}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule a Free Consultation <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">LetsGrowPro</h3>
              <p className="text-gray-400">
                Transforming businesses through strategic growth solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="flex flex-col gap-2 text-gray-400">
                <span>Digital Marketing</span>
                <span>Brand Strategy</span>
                <span>Analytics & Insights</span>
                <span>Growth Consulting</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-2 text-gray-400">
                <span>info@letsgrowpro.com</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LetsGrowPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
