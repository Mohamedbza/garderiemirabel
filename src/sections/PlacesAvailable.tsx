import { useEffect, useState, useRef } from "react"
import { useTranslation } from "react-i18next"

interface StatisticProps {
  number: number
  label: string
  duration?: number
}

function AnimatedCounter({ number, label, duration = 2000 }: StatisticProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * number))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, number, duration])

  // Calculate progress for the circular indicator
  const progress = (count / number) * 100
  const circumference = 2 * Math.PI * 45 // radius of 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div ref={ref} className="flex flex-col items-center space-y-4">
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-200" />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Number in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            {count}
          </span>
        </div>
      </div>

      {/* Label */}
      <p className="text-center text-gray-700 font-medium text-sm max-w-32">{label}</p>
    </div>
  )
}

export default function Statistics() {
  const { t } = useTranslation()

  return (
    <section id="places" className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-pink-500 w-16"></div>
              <span className="text-pink-500 text-xl font-semibold">{t('places.sectionLabel')}</span>
              <div className="h-px bg-pink-500 w-16"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
{t('places.title')}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
{t('places.description')}
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <AnimatedCounter number={14} label={t('places.ageGroups.infants')} duration={2500} />
            </div>

            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <AnimatedCounter number={66} label={t('places.ageGroups.toddlers')} duration={3000} />
            </div>

            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <AnimatedCounter number={15} label={t('places.ageGroups.teachers')} duration={2200} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
  
    </section>
  )
}
