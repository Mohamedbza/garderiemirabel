import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaPaintBrush,
  FaMusic,
  FaRunning,
  FaLanguage,
  FaLaptopCode,
  FaTheaterMasks,
  FaSeedling
} from "react-icons/fa";

const Programmes = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    {
      icon: <FaBook className="w-8 h-8" />,
      title: t('programs.services.earlyLearning.title'),
      description: t('programs.services.earlyLearning.description'),
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      features: [
        t('programs.services.earlyLearning.features.0'),
        t('programs.services.earlyLearning.features.1'),
        t('programs.services.earlyLearning.features.2')
      ]
    },
    {
      icon: <FaPaintBrush className="w-8 h-8" />,
      title: t('programs.services.creativeArts.title'),
      description: t('programs.services.creativeArts.description'),
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      features: [
        t('programs.services.creativeArts.features.0'),
        t('programs.services.creativeArts.features.1'),
        t('programs.services.creativeArts.features.2')
      ]
    },
    {
      icon: <FaMusic className="w-8 h-8" />,
      title: t('programs.services.musicDance.title'),
      description: t('programs.services.musicDance.description'),
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      features: [
        t('programs.services.musicDance.features.0'),
        t('programs.services.musicDance.features.1'),
        t('programs.services.musicDance.features.2')
      ]
    },
    {
      icon: <FaRunning className="w-8 h-8" />,
      title: t('programs.services.physicalEducation.title'),
      description: t('programs.services.physicalEducation.description'),
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      features: [
        t('programs.services.physicalEducation.features.0'),
        t('programs.services.physicalEducation.features.1'),
        t('programs.services.physicalEducation.features.2')
      ]
    },
    {
      icon: <FaLanguage className="w-8 h-8" />,
      title: t('programs.services.languageDevelopment.title'),
      description: t('programs.services.languageDevelopment.description'),
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      features: [
        t('programs.services.languageDevelopment.features.0'),
        t('programs.services.languageDevelopment.features.1'),
        t('programs.services.languageDevelopment.features.2')
      ]
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: t('programs.services.stemLearning.title'),
      description: t('programs.services.stemLearning.description'),
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      features: [
        t('programs.services.stemLearning.features.0'),
        t('programs.services.stemLearning.features.1'),
        t('programs.services.stemLearning.features.2')
      ]
    }
  ];

  const specialPrograms = [
    {
      icon: <FaTheaterMasks className="w-6 h-6" />,
      title: t('programs.specialItems.dramaClub.title'),
      description: t('programs.specialItems.dramaClub.description')
    },
    {
      icon: <FaSeedling className="w-6 h-6" />,
      title: t('programs.specialItems.natureExplorer.title'),
      description: t('programs.specialItems.natureExplorer.description')
    }
  ];

  return (
    <div id="programs" className="relative min-h-screen bg-blue-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-pink-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-60 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-16 w-28 h-28 bg-green-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 right-20 w-36 h-36 bg-yellow-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-24 right-1/4 w-20 h-20 bg-pink-300 rounded-xl opacity-15 animate-bounce transform rotate-12" style={{ animationDelay: '0s', animationDuration: '4s' }} />
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-blue-300 rounded-xl opacity-15 animate-bounce transform -rotate-12" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-green-300 rounded-xl opacity-15 animate-bounce transform rotate-45" style={{ animationDelay: '2.5s', animationDuration: '5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="w-12 h-0.5 bg-pink-500"></span>
            <p className="text-pink-500 text-lg font-semibold tracking-wide">{t('programs.sectionLabel')}</p>
            <span className="w-12 h-0.5 bg-blue-500"></span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
{t('programs.title')}
            <br />
            <span className="text-blue-500">
              {t('programs.titleHighlight')}
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
{t('programs.description')}
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative group ${service.bgColor} rounded-3xl p-8 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent rounded-full transform scale-150 translate-x-8 -translate-y-8"></div>
              </div>
              
              {/* Service Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Service Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                      <div className={`w-2 h-2 bg-blue-500 rounded-full`}></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Special Programs Section */}
        <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
{t('programs.specialPrograms')}
            </h3>
            <p className="text-gray-600 text-lg">
{t('programs.specialDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialPrograms.map((program, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                  {program.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">
                    {program.title}
                  </h4>
                  <p className="text-gray-600">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Gallery */}
        <div className="mt-8 space-y-6 max-w-2xl mx-auto">
          {/* First Image */}
          <img
            src="/special.jpg"
            alt="Special Program Activity 1"
            className="w-full rounded-2xl"
          />

          {/* Second Image */}
          <img
            src="/k.jpg"
            alt="Special Program Activity 2"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              {t('programs.enrollButton')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Programmes;