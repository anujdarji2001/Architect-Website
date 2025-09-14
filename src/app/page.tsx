"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Building, Home, Hammer, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import testimonialsData from '../data/testimonials.json';
import companyData from '../data/company.json';
import projectsData from '../data/projects.json';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);

  // Get carousel projects from data
  const carouselProjects = projectsData.projects.filter(project => 
    projectsData.carouselProjects.includes(project.id)
  );

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselProjects.length - 1 : prev - 1));
  };

  const startAutoScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
    }
    const interval = setInterval(nextSlide, 4000);
    setAutoScrollInterval(interval);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      setAutoScrollInterval(null);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, []);

  useEffect(() => {
    const container = document.getElementById('carousel-container');
    if (container) {
      container.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .fade-in-delay-1 { animation-delay: 0.3s; opacity: 0; }
        .fade-in-delay-2 { animation-delay: 0.6s; opacity: 0; }
        .fade-in-delay-3 { animation-delay: 0.9s; opacity: 0; }
      `}</style>

      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
          minHeight: '100vh',
        }}>
          {/* Enhanced Architectural blueprint grid */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(rgba(26, 26, 26, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 26, 26, 0.04) 1px, transparent 1px),
              linear-gradient(rgba(26, 26, 26, 0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 26, 26, 0.015) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
            opacity: 0.9,
            animation: 'gridMove 20s linear infinite',
          }} />
          
          {/* Floating geometric elements */}
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            width: '120px',
            height: '120px',
            border: '2px solid rgba(26, 26, 26, 0.1)',
            borderRadius: '50%',
            opacity: 0.7,
            animation: 'float 6s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute',
            top: '25%',
            right: '12%',
            width: '60px',
            height: '60px',
            border: '2px solid rgba(26, 26, 26, 0.08)',
            borderRadius: '50%',
            opacity: 0.5,
            animation: 'float 8s ease-in-out infinite reverse',
          }} />
          <div style={{
            position: 'absolute',
            top: '65%',
            left: '10%',
            width: '100px',
            height: '100px',
            border: '2px solid rgba(26, 26, 26, 0.08)',
            transform: 'rotate(45deg)',
            opacity: 0.6,
            animation: 'rotate 15s linear infinite',
          }} />
          <div style={{
            position: 'absolute',
            top: '45%',
            left: '5%',
            width: '80px',
            height: '80px',
            border: '2px solid rgba(26, 26, 26, 0.06)',
            transform: 'rotate(30deg)',
            opacity: 0.4,
            animation: 'rotate 12s linear infinite reverse',
          }} />
          
          {/* Gradient overlay for depth */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.02) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              {/* Enhanced Logo */}
              <div className="fade-in mb-12">
                <Image
                  src="/logo.jpg"
                  alt="Mannmish Design Studio Logo"
                  width={220}
                  height={110}
                  className="mx-auto rounded-2xl"
                  priority
                  style={{
                    filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.12))',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>
              
              {/* Enhanced Tagline */}
              <div className="fade-in fade-in-delay-1 mb-8">
                <div className="inline-flex items-center space-x-4 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <p className="typography-caption">
                    Architecture • Interior • Construction
                  </p>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Enhanced Main Title */}
              <h1 className="fade-in fade-in-delay-1 mb-8 typography-display">
                Mannmish Design Studio
              </h1>
              
              {/* Enhanced Description */}
              <p className="fade-in fade-in-delay-2 max-w-4xl mx-auto mb-16 typography-body-large">
                Where vision meets craftsmanship. We create spaces that tell stories,
                blending contemporary design with timeless elegance.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/projects"
                  className="group inline-flex items-center px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 typography-button"
                >
                  View Our Work
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-10 py-4 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 typography-button"
                  style={{ color: '#1a1a1a' }}
                >
                  Start Your Project
                  <Phone className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Image Carousel */}
        <section className="py-20 bg-white">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="typography-h2 mb-4">
                Our Work Gallery
              </h2>
              <p className="typography-body-large max-w-2xl mx-auto">
                A visual journey through our design philosophy and creative excellence.
              </p>
            </div>
            
            <div className="relative w-full">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" id="carousel-container">
                  {carouselProjects.map((project, index) => (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <div className="relative h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                        <Image
                          src={project.carouselImage || "/logo.jpg"}
                          alt={project.carouselTitle || project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-2xl font-semibold mb-2">{project.carouselTitle || project.title}</h3>
                          <p className="text-white/90">{project.carouselSubtitle || project.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => {
                  stopAutoScroll();
                  prevSlide();
                  setTimeout(startAutoScroll, 1000);
                }}
                onMouseEnter={stopAutoScroll}
                onMouseLeave={startAutoScroll}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => {
                  stopAutoScroll();
                  nextSlide();
                  setTimeout(startAutoScroll, 1000);
                }}
                onMouseEnter={stopAutoScroll}
                onMouseLeave={startAutoScroll}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {carouselProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      stopAutoScroll();
                      goToSlide(index);
                      setTimeout(startAutoScroll, 1000);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index 
                        ? 'bg-gray-900' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Our Expertise - Three Sections */}
        <section className="py-20" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="typography-h2 mb-4">
                Our Expertise
              </h2>
              <p className="typography-body-large max-w-2xl mx-auto">
                Three core areas where we excel, combining technical expertise with creative vision.
              </p>
            </div>
            
            {/* Architecture Section */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
              <div className="order-2 md:order-1">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/logo.jpg"
                    alt="Architecture Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 backdrop-blur-sm rounded-full mb-6">
                  <Building className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="typography-h2 mb-6">
                  Architecture
                </h3>
                <p className="typography-body-large mb-6">
                  We create innovative architectural solutions that balance functionality with aesthetic excellence. 
                  Our designs are not just buildings, but spaces that inspire and enhance the human experience.
                </p>
                <ul className="space-y-3 typography-body">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Residential & Commercial Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Sustainable & Green Building
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Structural Engineering Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Project Management & Supervision
                  </li>
                </ul>
              </div>
            </div>

            {/* Interior Design Section */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 backdrop-blur-sm rounded-full mb-6">
                  <Home className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="typography-h2 mb-6">
                  Interior Design
                </h3>
                <p className="typography-body-large mb-6">
                  We transform interior spaces into beautiful, functional environments that reflect your 
                  personality and enhance your lifestyle. Every detail is carefully considered and curated.
                </p>
                <ul className="space-y-3 typography-body">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Space Planning & Layout Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Material Selection & Sourcing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Custom Furniture Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Lighting & Color Schemes
                  </li>
                </ul>
              </div>
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/logo.jpg"
                    alt="Interior Design Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>

            {/* Construction Section */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/logo.jpg"
                    alt="Construction Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 backdrop-blur-sm rounded-full mb-6">
                  <Hammer className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="typography-h2 mb-6">
                  Construction
                </h3>
                <p className="typography-body-large mb-6">
                  Our construction management ensures precision delivery from concept to completion. 
                  We maintain the highest quality standards while keeping projects on time and within budget.
                </p>
                <ul className="space-y-3 typography-body">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Project Planning & Scheduling
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Quality Control & Supervision
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Vendor Management & Coordination
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Cost Management & Budget Control
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="typography-h2 mb-4">
                What Our Clients Say
              </h2>
              <p className="typography-body-large max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonialsData.testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="mb-6">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="typography-body italic mb-4">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="typography-h5">{testimonial.name}</h4>
                    <p className="typography-body-small">{testimonial.projectType} Project, {testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="typography-h2 mb-6">
                  Meet Our Team
                </h2>
                <p className="typography-body-large mb-8">
                  Our design studio combines the technical expertise of civil engineering 
                  with the creative vision of architectural planning and interior design.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-colors duration-200"
                >
                  About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-lg">
                  <h3 className="typography-h5 mb-2">Manank Patel</h3>
                  <p className="typography-caption">B.E. Civil</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-lg">
                  <h3 className="typography-h5 mb-2">Michelle Chokshi</h3>
                  <p className="typography-caption">B.Arch (COA), M.Plan (ITPI)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white mb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="typography-h2 mb-6" style={{ color: 'white' }}>
              Ready to Start Your Project?
            </h2>
            <p className="typography-body-large mb-8 max-w-2xl mx-auto" style={{ color: '#d1d5db' }}>
              Let&apos;s discuss your vision and create something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-200 typography-button"
              style={{ color: '#1a1a1a' }}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}