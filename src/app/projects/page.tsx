"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowRight, Building, Home, Hammer, Calendar, MapPin, Users, ExternalLink, Phone } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'interior', name: 'Interior Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Villa Design',
      category: 'residential',
      type: 'Architecture & Interior',
      location: 'Ahmedabad, Gujarat',
      year: '2024',
      area: '4500 sq ft',
      description: 'A contemporary villa featuring clean lines, large glass facades, and seamless indoor-outdoor living spaces.',
      image: '/logo.jpg', // Replace with actual project images
      features: ['Modern Architecture', 'Landscape Design', 'Interior Design', 'Smart Home Features'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Corporate Office Complex',
      category: 'commercial',
      type: 'Architecture',
      location: 'Gandhinagar, Gujarat',
      year: '2024',
      area: '12000 sq ft',
      description: 'A state-of-the-art office complex designed for productivity and employee well-being with sustainable features.',
      image: '/logo.jpg',
      features: ['Sustainable Design', 'Open Office Layout', 'Green Building', 'Parking Solutions'],
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Luxury Apartment Interior',
      category: 'interior',
      type: 'Interior Design',
      location: 'Vadodara, Gujarat',
      year: '2023',
      area: '2800 sq ft',
      description: 'Elegant interior design for a luxury apartment featuring premium materials and custom furniture.',
      image: '/logo.jpg',
      features: ['Custom Furniture', 'Premium Materials', 'Lighting Design', 'Space Optimization'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Heritage Restaurant Renovation',
      category: 'commercial',
      type: 'Architecture & Interior',
      location: 'Surat, Gujarat',
      year: '2023',
      area: '3500 sq ft',
      description: 'Restoration and modern adaptation of a heritage building into a contemporary restaurant space.',
      image: '/logo.jpg',
      features: ['Heritage Restoration', 'Modern Amenities', 'Kitchen Design', 'Dining Experience'],
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Family Home Extension',
      category: 'residential',
      type: 'Architecture',
      location: 'Rajkot, Gujarat',
      year: '2023',
      area: '1800 sq ft',
      description: 'Seamless extension to an existing family home, creating additional living space and modern amenities.',
      image: '/logo.jpg',
      features: ['Seamless Integration', 'Additional Living Space', 'Modern Amenities', 'Cost-Effective Design'],
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Boutique Hotel Interior',
      category: 'interior',
      type: 'Interior Design',
      location: 'Udaipur, Rajasthan',
      year: '2024',
      area: '8000 sq ft',
      description: 'Luxurious interior design for a boutique hotel featuring unique themes and premium hospitality spaces.',
      image: '/logo.jpg',
      features: ['Luxury Design', 'Unique Themes', 'Hospitality Focus', 'Guest Experience'],
      status: 'In Progress'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .fade-in-delay-1 { animation-delay: 0.2s; opacity: 0; }
        .fade-in-delay-2 { animation-delay: 0.4s; opacity: 0; }
        .fade-in-delay-3 { animation-delay: 0.6s; opacity: 0; }
      `}</style>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
        }}>
          {/* Blueprint grid */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(rgba(26, 26, 26, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 26, 26, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            opacity: 0.5,
          }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="fade-in" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: '#1A1A1A',
              marginBottom: '1.5rem'
            }}>
              Our Projects
            </h1>
            
            <p className="fade-in fade-in-delay-1 max-w-3xl mx-auto text-lg text-gray-600">
              Explore our portfolio of architectural and interior design projects. 
              Each project tells a unique story of innovation, functionality, and aesthetic excellence.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="fade-in bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.year}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Building className="h-4 w-4 mr-2" />
                        {project.area}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      href={`/projects/${project.id}`}
                      className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium flex items-center justify-center"
                    >
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600">Try selecting a different category to view more projects.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-20" style={{
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
                Our Impact
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and client satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gray-900 text-white">
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
              Let's discuss your vision and create something extraordinary together. 
              Our team is ready to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+919662002521"
                className="inline-flex items-center px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Call Now
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
