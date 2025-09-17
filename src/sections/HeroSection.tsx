import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../assets/hero-img.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  // Array of background images for the carousel
  const backgroundImages = [
    logo, // Original hero image
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Children playing
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Daycare classroom
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80", // Children learning
    "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80"  // Children outdoor play
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 1500); // Much shorter to allow proper transition

    }, 10000); // Change image every 10 seconds (even slower)

    return () => clearInterval(interval);
  }, [nextImageIndex, backgroundImages.length]);

  return (
    <div id="hero" className="relative min-h-screen bg-gray-800 overflow-hidden">
        {/* Animated Background Carousel */}
        <div className="absolute inset-0">
          {/* Current Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              transition: 'transform 3s ease-out',
              transform: isTransitioning ? 'translateX(100%)' : 'translateX(0%)',
              zIndex: 2
            }}
          />

          {/* Next Image (sliding in from left) */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage: `url(${backgroundImages[nextImageIndex]})`,
              transition: 'transform 3s ease-out',
              transform: isTransitioning ? 'translateX(0%)' : 'translateX(-100%)',
              zIndex: 1
            }}
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-green-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <p className="text-pink-400 text-lg font-medium tracking-wide">{t('hero.subtitle')}</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {t('hero.title')}
                  <br />
                  <span className="text-pink-500">
                    {t('hero.titleHighlight')}
                  </span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  {t('hero.description')}
                </p>
              </div>
              
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  {t('hero.getStarted')}
                </Link>
              </div>
            </div>

            {/* Right Content - Image Placeholder */}
            
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
