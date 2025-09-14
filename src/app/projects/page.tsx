"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowRight, Building, Home, Hammer, Calendar, MapPin, Users, ExternalLink, Phone } from 'lucide-react';
import projectsData from '../../data/projects.json';
import companyData from '../../data/company.json';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = projectsData.categories;
  const projects = projectsData.projects;

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <style>{`
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
            <h1 className="fade-in page-title">
              Our Projects
            </h1>
            
            <p className="fade-in fade-in-delay-1 page-subtitle">
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
                    <h3 className="typography-h4 text-gray-900 mb-2">{project.title}</h3>
                    <p className="typography-body-small mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center typography-body-small text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center typography-body-small text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.year}
                      </div>
                      <div className="flex items-center typography-body-small text-gray-500">
                        <Building className="h-4 w-4 mr-2" />
                        {project.area}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 typography-caption rounded">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 typography-caption rounded">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      href={`/projects/${project.id}`}
                      className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 typography-button flex items-center justify-center"
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
                <h3 className="typography-h4 text-gray-900 mb-2">No projects found</h3>
                <p className="typography-body">Try selecting a different category to view more projects.</p>
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
              <h2 className="typography-h2 mb-4">
                Our Impact
              </h2>
              <p className="typography-body-large max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and client satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="typography-h1 text-gray-900 mb-2">{companyData.company.stats.projectsCompleted}+</div>
                <div className="typography-body">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="typography-h1 text-gray-900 mb-2">{companyData.company.stats.clientSatisfaction}%</div>
                <div className="typography-body">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="typography-h1 text-gray-900 mb-2">{companyData.company.stats.yearsExperience}+</div>
                <div className="typography-body">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="typography-h1 text-gray-900 mb-2">{companyData.company.stats.citiesServed}+</div>
                <div className="typography-body">Cities Served</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
