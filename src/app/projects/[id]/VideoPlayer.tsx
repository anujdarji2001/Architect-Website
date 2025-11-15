"use client";

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Play, X } from 'lucide-react';

interface VideoPlayerProps {
  video: {
    mp4?: string;
    webm?: string;
    poster?: string;
  };
  projectTitle: string;
}

export default function VideoPlayer({ video, projectTitle }: VideoPlayerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollYRef = useRef(0);

  // Handle mount state for portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle Escape key to close video modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  // Prevent body scroll when modal is open and hide header
  useEffect(() => {
    if (isModalOpen) {
      // Save current scroll position
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Hide header directly via DOM manipulation
      const header = document.querySelector('header');
      if (header) {
        (header as HTMLElement).style.zIndex = '-1';
        (header as HTMLElement).style.visibility = 'hidden';
      }
      
      // Hide any image gallery modals or other overlays that might be open
      const imageModals = document.querySelectorAll('.fixed.inset-0.bg-black.z-50');
      imageModals.forEach((modal) => {
        const modalElement = modal as HTMLElement;
        if (modalElement.style.zIndex !== '99999') {
          modalElement.style.display = 'none';
          modalElement.setAttribute('data-hidden-by-video', 'true');
        }
      });
      
      // Also hide react-image-gallery elements
      const imageGalleryElements = document.querySelectorAll('.image-gallery, [class*="image-gallery"]');
      imageGalleryElements.forEach((el) => {
        const parent = (el as HTMLElement).closest('.fixed');
        if (parent && parent.classList.contains('bg-black')) {
          (parent as HTMLElement).style.display = 'none';
          (parent as HTMLElement).setAttribute('data-hidden-by-video', 'true');
        }
      });
    } else {
      // Restore scroll position
      const savedScrollY = scrollYRef.current;
      
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      // Restore scroll after a brief delay to ensure styles are cleared
      setTimeout(() => {
        if (savedScrollY > 0) {
          window.scrollTo(0, savedScrollY);
        }
      }, 0);
      
      // Restore header
      const header = document.querySelector('header');
      if (header) {
        (header as HTMLElement).style.zIndex = '';
        (header as HTMLElement).style.visibility = '';
      }
      
      // Restore hidden modals
      const hiddenModals = document.querySelectorAll('[data-hidden-by-video="true"]');
      hiddenModals.forEach((modal) => {
        (modal as HTMLElement).style.display = '';
        (modal as HTMLElement).removeAttribute('data-hidden-by-video');
      });
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      const header = document.querySelector('header');
      if (header) {
        (header as HTMLElement).style.zIndex = '';
        (header as HTMLElement).style.visibility = '';
      }
      const hiddenModals = document.querySelectorAll('[data-hidden-by-video="true"]');
      hiddenModals.forEach((modal) => {
        (modal as HTMLElement).style.display = '';
        (modal as HTMLElement).removeAttribute('data-hidden-by-video');
      });
    };
  }, [isModalOpen]);

  if (!video || !video.mp4) {
    return null;
  }

  return (
    <>
      <div className="mb-8">
        <div className="flex justify-center items-center">
          <div 
            className="relative inline-block rounded-lg overflow-hidden bg-gray-100 cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <video 
              className="block max-w-full h-auto"
              autoPlay 
              loop 
              muted 
              playsInline
              poster={video.poster || "/logo.jpg"}
              style={{ maxWidth: '100%', display: 'block' }}
            >
              <source src={video.mp4} type="video/mp4" />
              {video.webm && <source src={video.webm} type="video/webm" />}
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                  <Play className="h-8 w-8 text-gray-900 fill-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="typography-body-small text-gray-600 mt-3 text-center">
          Click to watch full video
        </p>
      </div>

      {/* Video Modal - Using Portal to render at root level */}
      {isModalOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 bg-black flex items-center justify-center"
          style={{ 
            zIndex: 99999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 0, 0, 0.98)'
          }}
          onClick={() => setIsModalOpen(false)}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          {/* Close Button - Highly visible */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsModalOpen(false);
            }}
            onMouseDown={(e) => e.stopPropagation()}
            className="fixed bg-white hover:bg-red-500 hover:text-white rounded-full shadow-2xl transition-all duration-200 flex items-center justify-center border-2 border-gray-300 hover:border-red-500 z-[100000]"
            aria-label="Close video"
            style={{ 
              width: '50px', 
              height: '50px',
              top: '20px',
              right: '20px',
              zIndex: 100000,
              position: 'fixed',
              cursor: 'pointer'
            }}
          >
            <X className="h-7 w-7 text-gray-900 hover:text-white" strokeWidth={3} style={{ pointerEvents: 'none' }} />
          </button>
          
          {/* Video Container */}
          <div 
            className="relative w-full max-w-6xl flex justify-center items-center px-4"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            style={{ 
              maxHeight: '100vh',
              paddingTop: '80px',
              paddingBottom: '80px'
            }}
          >
            <div className="w-full max-w-full relative">
              <video 
                className="w-full h-auto object-contain rounded-lg shadow-2xl bg-black"
                controls
                autoPlay
                poster={video.poster || "/logo.jpg"}
                style={{ 
                  maxHeight: '85vh',
                  width: '100%',
                  height: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <source src={video.mp4} type="video/mp4" />
                {video.webm && <source src={video.webm} type="video/webm" />}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

