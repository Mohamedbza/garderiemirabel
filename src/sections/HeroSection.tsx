import { useTranslation } from "react-i18next";
import logo from "../assets/hero-img.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${logo})`
          }}
        />
        
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                    {t('hero.titleHighlight')}
                  </span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  {t('hero.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {t('hero.getStarted')}
                </button>
                <button className="bg-transparent border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  {t('hero.learnMore')}
                </button>
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
