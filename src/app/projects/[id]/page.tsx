import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProjectImages from './ProjectImages';
import { ArrowLeft, Calendar, MapPin, Building, Users, ExternalLink } from 'lucide-react';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

// Generate static params for the dynamic route
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const projectId = params.id;

  // Mock project data - in a real app, this would come from an API
  const projects = {
    '1': {
      id: '1',
      title: 'Modern Villa Design',
      category: 'residential',
      type: 'Architecture & Interior',
      location: 'Ahmedabad, Gujarat',
      year: '2024',
      area: '4500 sq ft',
      status: 'Completed',
      description: 'A contemporary villa featuring clean lines, large glass facades, and seamless indoor-outdoor living spaces. This project showcases our expertise in modern residential design with a focus on sustainability and functionality.',
      longDescription: `This stunning modern villa represents the perfect blend of contemporary design and functional living. The project spans 4500 square feet and features innovative architectural solutions that maximize natural light and ventilation.

The design emphasizes clean lines and geometric forms, creating a striking visual presence while maintaining harmony with the surrounding landscape. Large glass facades blur the boundaries between indoor and outdoor spaces, creating a seamless connection with nature.

Key features include:
- Open-plan living areas that flow naturally from one space to another
- Floor-to-ceiling windows that flood the interior with natural light
- Sustainable materials and energy-efficient systems
- Landscaped outdoor areas that extend the living space
- Custom-designed furniture that complements the architectural vision

The interior design follows the same minimalist principles, with carefully selected materials and finishes that enhance the overall aesthetic while ensuring comfort and livability.`,
      features: [
        'Modern Architecture',
        'Landscape Design', 
        'Interior Design',
        'Smart Home Features',
        'Sustainable Design',
        'Custom Furniture',
        'Energy Efficient Systems',
        'Outdoor Living Spaces'
      ],
      images: [
        '/logo.jpg',
        '/logo.jpg', 
        '/logo.jpg',
        '/logo.jpg',
        '/logo.jpg',
        '/logo.jpg'
      ],
      team: [
        {
          name: 'Manank Patel',
          role: 'Lead Architect',
          qualification: 'B.E. Civil Engineering'
        },
        {
          name: 'Michelle Chokshi', 
          role: 'Interior Designer',
          qualification: 'B.Arch (COA), M.Plan (ITPI)'
        }
      ]
    },
    '2': {
      id: '2',
      title: 'Corporate Office Complex',
      category: 'commercial',
      type: 'Architecture',
      location: 'Gandhinagar, Gujarat',
      year: '2024',
      area: '12000 sq ft',
      status: 'In Progress',
      description: 'A state-of-the-art office complex designed for productivity and employee well-being with sustainable features.',
      longDescription: `This corporate office complex represents the future of workplace design, combining functionality with employee well-being. The 12,000 square foot facility features open-plan layouts, natural lighting, and sustainable design elements.

The building incorporates modern architectural principles with a focus on energy efficiency and environmental responsibility. Large windows and skylights maximize natural light while reducing energy consumption.

Key features include:
- Open office layouts that promote collaboration
- Green building materials and sustainable systems
- Comprehensive parking solutions
- Modern amenities and break areas
- Flexible meeting spaces and conference rooms`,
      features: [
        'Sustainable Design',
        'Open Office Layout',
        'Green Building',
        'Parking Solutions',
        'Energy Efficient',
        'Modern Amenities'
      ],
      images: [
        '/logo.jpg',
        '/logo.jpg', 
        '/logo.jpg',
        '/logo.jpg'
      ],
      team: [
        {
          name: 'Manank Patel',
          role: 'Lead Architect',
          qualification: 'B.E. Civil Engineering'
        },
        {
          name: 'Michelle Chokshi', 
          role: 'Project Manager',
          qualification: 'B.Arch (COA), M.Plan (ITPI)'
        }
      ]
    },
    '3': {
      id: '3',
      title: 'Luxury Apartment Interior',
      category: 'interior',
      type: 'Interior Design',
      location: 'Vadodara, Gujarat',
      year: '2023',
      area: '2800 sq ft',
      status: 'Completed',
      description: 'Elegant interior design for a luxury apartment featuring premium materials and custom furniture.',
      longDescription: `This luxury apartment interior showcases sophisticated design with premium materials and custom furniture. The 2,800 square foot space features elegant finishes and thoughtful space planning.

The design emphasizes luxury and comfort while maintaining functionality for modern living. Every detail has been carefully considered to create a cohesive and beautiful living environment.

Key features include:
- Premium materials and finishes
- Custom furniture design
- Sophisticated lighting design
- Space optimization
- Luxury amenities`,
      features: [
        'Custom Furniture',
        'Premium Materials',
        'Lighting Design',
        'Space Optimization',
        'Luxury Finishes',
        'Modern Amenities'
      ],
      images: [
        '/logo.jpg',
        '/logo.jpg', 
        '/logo.jpg',
        '/logo.jpg',
        '/logo.jpg'
      ],
      team: [
        {
          name: 'Michelle Chokshi',
          role: 'Lead Interior Designer',
          qualification: 'B.Arch (COA), M.Plan (ITPI)'
        },
        {
          name: 'Manank Patel', 
          role: 'Project Coordinator',
          qualification: 'B.E. Civil Engineering'
        }
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects] || projects['1'];

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="typography-h2 mb-4">Project Not Found</h1>
            <p className="typography-body mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200 typography-button"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link 
                href="/projects"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <div className="flex items-center space-x-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                
                <h1 className="typography-h1 mb-6">
                  {project.title}
                </h1>
                
                <p className="typography-body-large mb-8">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="typography-body-small text-gray-500">Year</div>
                      <div className="typography-body font-medium text-gray-900">{project.year}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="typography-body-small text-gray-500">Location</div>
                      <div className="typography-body font-medium text-gray-900">{project.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="typography-body-small text-gray-500">Area</div>
                      <div className="typography-body font-medium text-gray-900">{project.area}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="typography-body-small text-gray-500">Team</div>
                      <div className="typography-body font-medium text-gray-900">{project.team.length} Members</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="fade-in fade-in-delay-1">
                <ProjectImages 
                  images={project.images} 
                  projectTitle={project.title} 
                  showHeroImage={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="typography-h2 mb-8">
                  Project Overview
                </h2>
                
                <div className="typography-body mb-8">
                  <p className="mb-6">
                    {project.longDescription}
                  </p>
                </div>
                
                <h3 className="typography-h3 mb-6 mt-12">
                  Key Features
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="typography-body">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <h3 className="typography-h3 mb-6">
                    Project Team
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {project.team.map((member, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="typography-h5 mb-1">{member.name}</h4>
                        <p className="typography-body-small mb-1">{member.role}</p>
                        <p className="typography-caption">{member.qualification}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <h4 className="typography-h5 mb-4">Interested in Similar Work?</h4>
                    <p className="typography-body-small mb-4" style={{ color: '#d1d5db' }}>
                      Let&apos;s discuss your project requirements and create something extraordinary together.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center w-full justify-center px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-200 typography-button"
                    >
                      Get In Touch
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 lg:py-20" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="typography-h2 mb-4">
                Project Gallery
              </h2>
              <p className="typography-body-large">
                Click on any image to view in full size
              </p>
            </div>
            
            <ProjectImages images={project.images} projectTitle={project.title} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}