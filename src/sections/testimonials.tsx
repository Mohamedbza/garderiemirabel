import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Gregory",
    text: "Une garderie magnifique parfaite pour mes enfants! Je la recommande à tout le monde",
    avatar: "/parent-father-smiling.jpg",
  },
  {
    id: 2,
    name: "Sarah",
    text: "Une garderie très sécuritaire pour mon enfant, il s'amuse toujours là bas. Une équipe de confiance!",
    avatar: "/parent-mother-happy.jpg",
  },
  {
    id: 3,
    name: "Mme. Belba",
    text: "Mon fils a fréquenté la garderie l'académie de Saint Michel pendant 4 ans jusqu'à son départ à la maternelle cette année. On était très satisfait du travail colossal que les éducatrices ont fait et de la bonne ambiance existante entre les parents et le personnel",
    avatar: "/parent-woman-professional.jpg",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section
      id="testimonials-section"
      className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          {/* Section label with decorative lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-20"></div>
            <span className="mx-4 text-pink-500 text-xl font-semibold">Témoignages</span>
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-20"></div>
          </div>

          {/* Main title */}
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Témoignages des parents
          </h2>

          <p
            className={`text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Découvrez ce que nos parents pensent de notre garderie et des services que nous offrons à leurs enfants.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-opacity-100 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-opacity-100 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
          </button>

          {/* Testimonial card */}
          <div
            className={`bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              {/* Quote icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}