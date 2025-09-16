import { useTranslation } from "react-i18next";
import { 
  FaBook, 
  FaPaintBrush, 
  FaMusic, 
  FaRunning, 
  FaLanguage, 
  FaLaptopCode,
  FaTheaterMasks,
  FaSeedling,
  FaArrowRight
} from "react-icons/fa";

const Programmes = () => {
  const { t } = useTranslation("servicesSection");

  const services = [
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Early Learning",
      description: "Comprehensive educational programs designed to build foundational skills in reading, writing, and mathematics.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      features: ["Age-appropriate curriculum", "Interactive learning", "Progress tracking"]
    },
    {
      icon: <FaPaintBrush className="w-8 h-8" />,
      title: "Creative Arts",
      description: "Unleash your child's creativity through painting, drawing, crafts, and various artistic expressions.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      features: ["Art workshops", "Creative projects", "Skill development"]
    },
    {
      icon: <FaMusic className="w-8 h-8" />,
      title: "Music & Dance",
      description: "Musical education and dance classes that enhance rhythm, coordination, and self-expression.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      features: ["Instrument learning", "Dance classes", "Performance opportunities"]
    },
    {
      icon: <FaRunning className="w-8 h-8" />,
      title: "Physical Education",
      description: "Fun physical activities and sports that promote healthy lifestyle and teamwork skills.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      features: ["Sports activities", "Motor skills", "Team building"]
    },
    {
      icon: <FaLanguage className="w-8 h-8" />,
      title: "Language Development",
      description: "Multilingual programs that enhance communication skills and cultural awareness.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      features: ["Bilingual education", "Communication skills", "Cultural awareness"]
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "STEM Learning",
      description: "Science, technology, engineering, and math activities that spark curiosity and innovation.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      features: ["Science experiments", "Technology basics", "Problem solving"]
    }
  ];

  const specialPrograms = [
    {
      icon: <FaTheaterMasks className="w-6 h-6" />,
      title: "Drama Club",
      description: "Build confidence through storytelling and performance"
    },
    {
      icon: <FaSeedling className="w-6 h-6" />,
      title: "Nature Explorer",
      description: "Outdoor learning and environmental awareness"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-60 right-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-16 w-28 h-28 bg-gradient-to-r from-green-200 to-teal-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 right-20 w-36 h-36 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-24 right-1/4 w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl opacity-15 animate-bounce transform rotate-12" style={{ animationDelay: '0s', animationDuration: '4s' }} />
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl opacity-15 animate-bounce transform -rotate-12" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-br from-green-300 to-green-400 rounded-xl opacity-15 animate-bounce transform rotate-45" style={{ animationDelay: '2.5s', animationDuration: '5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"></span>
            <p className="text-pink-500 text-lg font-semibold tracking-wide">Our Programmes</p>
            <span className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            What We Offer For
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Your Little Ones
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Discover our comprehensive range of educational programs and activities designed to nurture 
            your child's growth, creativity, and development in a fun and engaging environment.
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
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                <div className="pt-4 flex items-center gap-2 text-gray-700 group-hover:text-gray-900 transition-colors">
                  <span className="font-medium">Learn More</span>
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Special Programs Section */}
        <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Special Programs
            </h3>
            <p className="text-gray-600 text-lg">
              Unique activities that make learning extra special and memorable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialPrograms.map((program, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center text-white">
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Enroll Your Child
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button className="bg-transparent border-2 border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>

      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-16 fill-current text-white opacity-60 transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Programmes;