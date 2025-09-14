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
        <section className="relative pt-16" style={{
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
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
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
                Our Expertise
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                From architectural design to interior styling and construction management,
                we bring comprehensive expertise to every project.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-6">
                  <Building className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Architecture</h3>
                <p className="text-gray-600">
                  Innovative architectural solutions that balance functionality with aesthetic excellence.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-700"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-6">
                  <Home className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Interior Design</h3>
                <p className="text-gray-600">
                  Curated interior spaces that reflect your personality and enhance your lifestyle.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-700"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-6">
                  <Hammer className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Construction</h3>
                <p className="text-gray-600">
                  Precision construction management ensuring quality delivery from concept to completion.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center mt-4 text-gray-900 hover:text-gray-700"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
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
                  <p className="text-gray-700 text-sm">+91 99048 25197</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Michelle Chokshi</h3>
                  <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">B.Arch (COA), M.Plan (ITPI)</p>
                  <p className="text-gray-700 text-sm">+91 97245 74042</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
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