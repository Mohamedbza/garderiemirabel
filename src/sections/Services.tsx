"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Services = () => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const services = [
    {
      id: 1,
      image: "/children-playing-educational-games.jpg",
      title: t('services.items.educational.title'),
      content: t('services.items.educational.content'),
    },
    {
      id: 2,
      image: "/children-doing-arts-and-crafts.jpg",
      title: t('services.items.arts.title'),
      content: t('services.items.arts.content'),
    },
    {
      id: 3,
      image: "/children-outdoor-sports.png",
      title: t('services.items.physical.title'),
      content: t('services.items.physical.content'),
    },
    {
      id: 4,
      image: "/children-doing-science-experiments.jpg",
      title: t('services.items.science.title'),
      content: t('services.items.science.content'),
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-pink-500 text-xl font-semibold tracking-wide flex items-center justify-center gap-2">
            <span className="w-12 h-0.5 bg-pink-500"></span>
            {t('services.sectionLabel')}
            <span className="w-12 h-0.5 bg-pink-500"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
{t('services.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t('services.titleHighlight')}
            </span>
            <br />
            {t('services.titleEnd')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
{t('services.description')}
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-pink-500 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-pink-500 transition-colors" />
          </button>

          {/* Service Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                {/* Left: Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={services[currentIndex].image || "/placeholder.svg"}
                    alt={services[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                </div>

                {/* Right: Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                      {services[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{services[currentIndex].content}</p>
                  </div>

                  {/* Service number indicator */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </div>
                    <div className="text-sm text-gray-500">
{t('services.serviceCounter', { current: currentIndex + 1, total: services.length })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-pink-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
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
  )
}

export default Services
