'use client';

import React, { useState, useEffect } from 'react';

// Type definition for slider items
interface SliderItem {
  id: number;
  photo: string; 
}

interface SliderProps {
  items?: SliderItem[];
  autoAdvance?: boolean;
  interval?: number;
}

const Slider: React.FC<SliderProps> = ({ 
  items: customItems, 
  autoAdvance = true, 
  interval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default slider data for construction company
  const defaultSliderItems: SliderItem[] = [
    {
      id: 1,
      photo: '/images/mm.jpg', 
    },
    {
      id: 2,
      photo: '/images/z4.jpg', 
    },
    {
      id: 3,
      photo: '/gg.jpg', 
    } 
  ];

  const sliderItems = customItems || defaultSliderItems;

  // Auto-advance slider
  useEffect(() => {
    if (!autoAdvance) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, interval);

    return () => clearInterval(timer);
  }, [sliderItems.length, autoAdvance, interval]);


  return (
    <div className='w-full h-full'>
      <div className='relative w-full h-full'>
        {/* Slider container */}
        <div className='relative overflow-hidden w-full h-full'>
          <div 
            className='flex transition-transform duration-700 ease-in-out h-full'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sliderItems.map((item) => (
              <div key={item.id} className='w-full flex-shrink-0 h-full'>
                <div className='relative w-full h-full'>
                  <img 
                    src={item.photo} 
                    alt={`Slide ${item.id}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar at bottom of slider */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32'>
            <div className='w-full bg-white/30 rounded-full h-1.5 overflow-hidden border border-white/50'>
              <div 
                className='bg-white h-full rounded-full transition-all duration-700 ease-in-out'
                style={{ 
                  width: `${((currentSlide + 1) / sliderItems.length) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
