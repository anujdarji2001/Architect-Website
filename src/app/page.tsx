"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Building, Home, Hammer } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .fade-in-delay-1 { animation-delay: 0.5s; opacity: 0; }
        .fade-in-delay-2 { animation-delay: 1s; opacity: 0; }
        .fade-in-delay-3 { animation-delay: 1.5s; opacity: 0; }
      `}</style>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
          minHeight: '100vh',
        }}>
          {/* Architectural blueprint grid */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(rgba(26, 26, 26, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 26, 26, 0.03) 1px, transparent 1px),
              linear-gradient(rgba(26, 26, 26, 0.01) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 26, 26, 0.01) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
            opacity: 0.8,
          }} />
          
          {/* Geometric elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            width: '200px',
            height: '200px',
            border: '1px solid rgba(26, 26, 26, 0.08)',
            borderRadius: '50%',
            opacity: 0.6,
          }} />
          <div style={{
            position: 'absolute',
            top: '60%',
            left: '8%',
            width: '150px',
            height: '150px',
            border: '1px solid rgba(26, 26, 26, 0.06)',
            transform: 'rotate(45deg)',
            opacity: 0.5,
          }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              {/* Logo */}
              <div className="fade-in mb-8">
                <Image
                  src="/logo.jpg"
                  alt="Mannmish Design Studio Logo"
                  width={200}
                  height={100}
                  className="mx-auto rounded-2xl"
                  priority
                  style={{
                    filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.08))',
                  }}
                />
              </div>
              
              <div className="fade-in fade-in-delay-1 mb-6">
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#666666',
                }}>
                  Architecture • Interior • Construction
                </p>
              </div>
              
              <h1 className="fade-in fade-in-delay-1" style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
                color: '#1A1A1A',
                marginBottom: '1.5rem'
              }}>
                Mannmish Design Studio
              </h1>
              
              <p className="fade-in fade-in-delay-2 max-w-3xl mx-auto mb-12" style={{
                fontSize: '1.3rem',
                fontWeight: 300,
                lineHeight: '1.7',
                color: '#4A4A4A',
                fontFamily: 'Crimson Text, serif',
                fontStyle: 'italic'
              }}>
                Where vision meets craftsmanship. We create spaces that tell stories,
                blending contemporary design with timeless elegance.
              </p>
              
              <div className="fade-in fade-in-delay-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Project Carousel */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#1A1A1A',
                marginBottom: '1rem'
              }}>
                Featured Projects
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover some of our recent work that showcases our design philosophy and expertise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/projects/1" className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-2xl mb-4">
                  <Image
                    src="/logo.jpg"
                    alt="Modern Villa Design"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      Completed 2024
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Villa Design</h3>
                <p className="text-gray-600 text-sm">Contemporary architecture with seamless indoor-outdoor living</p>
              </Link>
              
              <Link href="/projects/2" className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-2xl mb-4">
                  <Image
                    src="/logo.jpg"
                    alt="Corporate Office Complex"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      In Progress
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Office Complex</h3>
                <p className="text-gray-600 text-sm">Sustainable design for modern workplace productivity</p>
              </Link>
              
              <Link href="/projects/3" className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-2xl mb-4">
                  <Image
                    src="/logo.jpg"
                    alt="Luxury Apartment Interior"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      Completed 2023
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Apartment Interior</h3>
                <p className="text-gray-600 text-sm">Elegant interior design with premium materials</p>
              </Link>
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
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#1A1A1A',
                marginBottom: '1rem'
              }}>
                Our Expertise
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#1A1A1A',
                  marginBottom: '1.5rem'
                }}>
                  Architecture
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  We create innovative architectural solutions that balance functionality with aesthetic excellence. 
                  Our designs are not just buildings, but spaces that inspire and enhance the human experience.
                </p>
                <ul className="space-y-3 text-gray-600">
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
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#1A1A1A',
                  marginBottom: '1.5rem'
                }}>
                  Interior Design
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  We transform interior spaces into beautiful, functional environments that reflect your 
                  personality and enhance your lifestyle. Every detail is carefully considered and curated.
                </p>
                <ul className="space-y-3 text-gray-600">
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
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#1A1A1A',
                  marginBottom: '1.5rem'
                }}>
                  Construction
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Our construction management ensures precision delivery from concept to completion. 
                  We maintain the highest quality standards while keeping projects on time and within budget.
                </p>
                <ul className="space-y-3 text-gray-600">
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
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#1A1A1A',
                marginBottom: '1rem'
              }}>
                What Our Clients Say
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Mannmish Design Studio transformed our home beyond our expectations. Their attention to detail and creative solutions made our dream home a reality."
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900">Rajesh & Priya Shah</h4>
                  <p className="text-sm text-gray-600">Residential Project, Ahmedabad</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Professional, punctual, and incredibly talented. They delivered our office renovation on time and within budget. Highly recommended!"
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900">Amit Patel</h4>
                  <p className="text-sm text-gray-600">Commercial Project, Vadodara</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "From concept to completion, the team was exceptional. Their innovative design approach and quality construction exceeded all our expectations."
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900">Dr. Neha Gupta</h4>
                  <p className="text-sm text-gray-600">Villa Project, Gandhinagar</p>
                </div>
              </div>
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
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#1A1A1A',
                  marginBottom: '1.5rem'
                }}>
                  Meet Our Team
                </h2>
                <p className="text-gray-600 text-lg mb-8">
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
                  <h3 className="font-semibold text-gray-900 mb-2">Manank Patel</h3>
                  <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">B.E. Civil</p>
                  <p className="text-gray-700 text-sm">+91 9662002521</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Michelle Chokshi</h3>
                  <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">B.Arch (COA), M.Plan (ITPI)</p>
                  <p className="text-gray-700 text-sm">+91 9662002521</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white mb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.5rem',
              fontWeight: 300,
              marginBottom: '1.5rem'
            }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and create something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
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