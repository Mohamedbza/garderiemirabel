import { useTranslation } from "react-i18next";
import { FaBaby, FaPalette, FaUtensils, FaChalkboardTeacher, FaHome, FaRunning } from "react-icons/fa";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaBaby className="w-6 h-6" />,
      title: t('whyChooseUs.features.birthToPreschool.title'),
      description: t('whyChooseUs.features.birthToPreschool.description')
    },
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: t('whyChooseUs.features.healthyMeals.title'),
      description: t('whyChooseUs.features.healthyMeals.description')
    },
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: t('whyChooseUs.features.learningThroughPlay.title'),
      description: t('whyChooseUs.features.learningThroughPlay.description')
    },
    {
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      title: t('whyChooseUs.features.experiencedEducators.title'),
      description: t('whyChooseUs.features.experiencedEducators.description')
    },
    {
      icon: <FaHome className="w-6 h-6" />,
      title: t('whyChooseUs.features.safeEnvironment.title'),
      description: t('whyChooseUs.features.safeEnvironment.description')
    },
    {
      icon: <FaRunning className="w-6 h-6" />,
      title: t('whyChooseUs.features.sportActivities.title'),
      description: t('whyChooseUs.features.sportActivities.description')
    }
  ];

  return (
    <div id="why-choose-us" className="relative min-h-screen bg-white overflow-hidden">
      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-pink-500 text-xl font-semibold tracking-wide flex items-center justify-center gap-2">
            <span className="w-12 h-0.5 bg-pink-500"></span>
            {t('whyChooseUs.sectionLabel')}
            <span className="w-12 h-0.5 bg-pink-500"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            {t('whyChooseUs.title')}
            <br />
            <span className="text-blue-500">
              {t('whyChooseUs.titleHighlight')}
            </span>
            <br />
            {t('whyChooseUs.titleEnd')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('whyChooseUs.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white bg-opacity-70 backdrop-blur-sm hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-100"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                {feature.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-800 font-semibold text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 fill-current text-white opacity-80"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default WhyChooseUs;