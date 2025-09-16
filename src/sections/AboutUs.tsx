import { useTranslation } from "react-i18next";
import { FaPlay, FaGamepad, FaAppleAlt, FaShieldAlt } from "react-icons/fa";

const AboutUs = () => {
  const { t } = useTranslation("aboutSection");

  const features = [
    {
      icon: <FaGamepad className="w-6 h-6" />,
      title: "Sport Activities",
      description: "Engaging physical activities that promote healthy development and teamwork skills."
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Highly Secured",
      description: "Complete safety measures and secure environment for your peace of mind."
    },
    {
      icon: <FaAppleAlt className="w-6 h-6" />,
      title: "Outdoor Games",
      description: "Fun outdoor activities that encourage exploration and connection with nature."
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 space-y-16">

        {/* 🔹 TOP: Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-pink-500 text-xl font-semibold tracking-wide flex items-center justify-center gap-2">
            <span className="w-12 h-0.5 bg-pink-500"></span>
            About Us
            <span className="w-12 h-0.5 bg-pink-500"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to Kindergarten
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Build Bright Future
            </span>
            <br />
            For Your Children
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* 🔹 MIDDLE: Video & Text Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div className="aspect-video bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                <img
                  src="/api/placeholder/600/400"
                  alt="Children playing and learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                  <button className="w-20 h-20 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
                    <FaPlay className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                ⭐ Best Care
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                💚 Safe Environment
              </div>
            </div>
          </div>

          {/* Right: Supporting Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              A Place to Learn and Grow
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our kindergarten provides a nurturing and stimulating environment 
              where children can explore, create, and grow into confident individuals. 
              We focus on play-based learning and holistic development to prepare 
              them for a bright future.
            </p>
          </div>
        </div>

        {/* 🔹 BOTTOM: Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white bg-opacity-70 backdrop-blur-sm hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-400 to-blue-400 rounded-xl flex items-center justify-center text-white shadow-lg">
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

export default AboutUs;
