"use client";

import ImageGallery from 'react-image-gallery';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProjectImagesProps {
  images: string[];
  projectTitle: string;
  showHeroImage?: boolean;
}

export default function ProjectImages({ images, projectTitle, showHeroImage = false }: ProjectImagesProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert images to react-image-gallery format
  const galleryImages = images.map((image, index) => ({
    original: image,
    thumbnail: image,
    originalAlt: `${projectTitle} - Image ${index + 1}`,
    thumbnailAlt: `${projectTitle} - Thumbnail ${index + 1}`,
  }));

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsGalleryOpen(true);
  };

  // Handle Escape key to close gallery
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isGalleryOpen) {
        setIsGalleryOpen(false);
      }
    };

    if (isGalleryOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isGalleryOpen]);

  if (showHeroImage) {
    return (
      <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
        <Image
          src={images[0]}
          alt={projectTitle}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => openGallery(index)}
          >
            <Image
              src={image}
              alt={`${projectTitle} - Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                <ExternalLink className="h-6 w-6 text-gray-900" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Gallery */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
            >
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <ImageGallery
              items={galleryImages}
              startIndex={currentIndex}
              showThumbnails={true}
              showFullscreenButton={true}
              showPlayButton={false}
              showNav={true}
              showBullets={true}
              autoPlay={false}
              slideInterval={3000}
              slideDuration={450}
              renderItem={(item) => (
                <div className="relative h-[80vh] w-full">
                  <Image
                    src={item.original}
                    alt={item.originalAlt || `${projectTitle} - Image`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              renderThumbInner={(item) => (
                <div className="relative w-full h-20 rounded-lg overflow-hidden">
                  <Image
                    src={item.thumbnail || item.original}
                    alt={item.thumbnailAlt || `${projectTitle} - Thumbnail`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            />
          </div>
        </div>
      )}
    </>
  );
}