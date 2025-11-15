"use client";

import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Users, Award, MapPin, Calendar } from 'lucide-react';
import teamData from '../../data/team.json';
import companyData from '../../data/company.json';

export default function AboutPage() {
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
            <div className="fade-in mb-8">
              <Image
                src="/logo.jpg"
                alt="Mannmish Design Studio Logo"
                width={150}
                height={75}
                className="mx-auto rounded-xl"
                priority
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.08))',
                }}
              />
            </div>
            
            <h1 className="fade-in fade-in-delay-1 page-title">
              About Mannmish Design Studio
            </h1>
            
            <p className="fade-in fade-in-delay-2 page-subtitle">
              Founded with a passion for creating exceptional spaces, we bring together 
              technical expertise and creative vision to transform architectural dreams into reality.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="typography-h2 mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 typography-body">
                  <p>
                    Mannmish Design Studio was born from a shared vision of creating spaces 
                    that not only serve their functional purpose but also inspire and elevate 
                    the human experience. Our journey began with the union of two complementary 
                    skill sets: civil engineering precision and architectural creativity.
                  </p>
                  <p>
                    We believe that great design emerges from the intersection of technical 
                    excellence and artistic vision. Every project we undertake is approached 
                    with meticulous attention to detail, innovative problem-solving, and a 
                    deep understanding of our clients&apos; needs and aspirations.
                  </p>
                  <p>
                    From residential homes to commercial spaces, we bring the same level of 
                    dedication and expertise to every project, ensuring that each space we 
                    create tells a unique story.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4">
                        <Calendar className="h-6 w-6 text-gray-700" />
                      </div>
                      <div className="typography-h3 text-gray-900 mb-2">{companyData.company.founded}</div>
                      <div className="typography-body-small">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4">
                        <Users className="h-6 w-6 text-gray-700" />
                      </div>
                      <div className="typography-h3 text-gray-900 mb-2">{companyData.company.stats.projectsCompleted}+</div>
                      <div className="typography-body-small">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4">
                        <Award className="h-6 w-6 text-gray-700" />
                      </div>
                      <div className="typography-h3 text-gray-900 mb-2">{companyData.company.stats.clientSatisfaction}%</div>
                      <div className="typography-body-small">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4">
                        <MapPin className="h-6 w-6 text-gray-700" />
                      </div>
                      <div className="typography-h3 text-gray-900 mb-2">{companyData.company.location.state}</div>
                      <div className="typography-body-small">Based in {companyData.company.location.city}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="typography-h2 mb-4">
                Meet Our Founders
              </h2>
              <p className="typography-body-large max-w-2xl mx-auto">
                Our collaborative approach combines diverse expertise to deliver 
                comprehensive design and construction solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {teamData.team.map((member) => (
                <div key={member.id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg text-center">
                  <div className="mb-6">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl ring-4 ring-white/50">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 192px, 224px"
                        />
                      </div>
                    </div>
                    <h3 className="typography-h3 text-gray-900 mb-2">{member.name}</h3>
                    <p className="typography-caption mb-4">{member.qualifications}</p>
                  </div>
                  <div className="text-left space-y-4">
                    <p className="typography-body">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="typography-h2 mb-4">
                Our Design Philosophy
              </h2>
              <p className="typography-body-large max-w-2xl mx-auto">
                We believe in creating spaces that are both functional and beautiful, 
                sustainable and innovative, timeless yet contemporary.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="typography-h4 mb-4 text-gray-900">Client-Centric</h3>
                <p className="typography-body">
                  Every project begins with understanding our clients&apos; unique needs, 
                  lifestyle, and vision. We collaborate closely throughout the design process.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="typography-h4 mb-4 text-gray-900">Quality Excellence</h3>
                <p className="typography-body">
                  We maintain the highest standards in design execution, material selection, 
                  and construction supervision to ensure lasting quality.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="typography-h4 mb-4 text-gray-900">Sustainable Design</h3>
                <p className="typography-body">
                  Environmental responsibility is integral to our design process. We create 
                  spaces that are energy-efficient and environmentally conscious.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-20" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="typography-h2 mb-4">
                Visit Our Studio
              </h2>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg max-w-2xl mx-auto text-center">
              <div className="mb-6">
                <MapPin className="h-12 w-12 text-gray-700 mx-auto mb-4" />
                <h3 className="typography-h4 text-gray-900 mb-4">Studio Address</h3>
              </div>
              
              <div className="space-y-2 typography-body">
                <p className="font-medium">804, Colonnade 2, Near One World Capital</p>
                <p>B/h. Rajpath Club, Vikramnagar, Bodakdev</p>
                <p>Ahmedabad - 380054, Gujarat</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="typography-body mb-4">Ready to discuss your project?</p>
                <div className="flex justify-center">
                  <a 
                    href="tel:+919662002521"
                    className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}