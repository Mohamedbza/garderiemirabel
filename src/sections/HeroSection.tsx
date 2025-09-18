import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'; 
import { motion } from "framer-motion";
import Slider from "../components/Slider";

const HeroSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
 
  return (
    <div id="hero" className="relative min-h-screen bg-gray-800 overflow-hidden">
        {/* Animated Background Carousel as background */}
        <div className="absolute inset-0 z-10 opacity-50">
          <Slider />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-green-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div 
              className="text-white space-y-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <div className="space-y-4">
                <motion.p 
                  className="text-pink-400 text-lg font-medium tracking-wide"
                  variants={fadeInLeft}
                >
                  {t('hero.subtitle')}
                </motion.p>
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold leading-tight"
                  variants={fadeInUp}
                >
                  {t('hero.title')}
                  <br />
                  <span className="text-pink-500">
                    {t('hero.titleHighlight')}
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-white text-lg leading-relaxed max-w-lg"
                  variants={fadeInUp}
                >
                  {t('hero.description')}
                </motion.p>
              </div>
              
              <motion.div 
                className="pt-4"
                variants={fadeInUp}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  {t('hero.getStarted')}
                </Link>
              </motion.div>
            </motion.div>

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
