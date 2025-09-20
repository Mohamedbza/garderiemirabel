import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="relative min-h-screen  bg-white overflow-hidden">
      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 space-y-16">

        {/* 🔹 TOP: Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-pink-500 text-xl font-semibold tracking-wide flex items-center justify-center gap-2">
            <span className="w-12 h-0.5 bg-pink-500"></span>
{t('about.sectionLabel')}
            <span className="w-12 h-0.5 bg-pink-500"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
{t('about.title')}
            <br />
            <span className="text-blue-500">
              {t('about.titleHighlight')}
            </span>
            <br />
            {t('about.titleEnd')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
{t('about.description')}
          </p>
        </div>

        {/* 🔹 MIDDLE: Video & Text Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div className="aspect-video bg-blue-500 flex items-center justify-center">
                <img
                  src="/images/mm.jpg"
                  alt="Children playing and learning"
                  className="w-full h-full object-cover"
                />
              </div>

              
            </div>
          </div>

          {/* Right: Supporting Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
{t('about.videoTitle')}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
{t('about.videoDescription')}
            </p>
          </div>
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

export default AboutUs;
