import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface SlideShowProps {
  images: {
    src: string;
    alt: string;
  }[];
  width?: number;
  height?: number;
  autoPlayInterval?: number;
}

const SlideShow: React.FC<SlideShowProps> = ({ 
  images, 
  width = 500, 
  height = 500,
  autoPlayInterval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide('right');
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  const moveSlide = (direction: 'left' | 'right') => {
    if (isTransitioning) return;

    setCurrentSlide(prev => {
      if (direction === 'right') {
        return (prev + 1) % images.length;
      } else {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
    });

    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  if (!images.length) return null;

  return (
    <div className="relative group">
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
        <Image 
          src={`/images/${images[currentSlide].src}`}
          alt={images[currentSlide].alt}
          width={width}
          height={height}
          className="rounded-lg"
        />
      </div>
      
      <button 
        onClick={() => moveSlide('left')}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      
      <button 
        onClick={() => moveSlide('right')}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
