import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProjectImages from './ProjectImages';
import VideoPlayer from './VideoPlayer';
import { ArrowLeft, Calendar, MapPin, Building } from 'lucide-react';
import projectsData from '../../../data/projects.json';

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for the dynamic route
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const projectId = id;

  // Get project data from JSON file
  const project = projectsData.projects.find(p => p.id.toString() === projectId) || projectsData.projects[0];

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
            <div className={`grid ${project.video ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-12`}>
              <div className={project.video ? 'lg:col-span-2' : 'lg:col-span-1'}>
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
              
              {project.video && (
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <h3 className="typography-h3 mb-6">
                      Project Showcase
                    </h3>
                    
                    <VideoPlayer video={project.video} projectTitle={project.title} />
                  </div>
                </div>
              )}
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