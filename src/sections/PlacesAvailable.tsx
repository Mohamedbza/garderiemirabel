import { useTranslation } from "react-i18next"
import AnimatedCounter from "../components/AnimatedCounter"

export default function Statistics() {
  const { t } = useTranslation()

  return (
    <section id="places" className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-pink-500 w-16"></div>
              <span className="text-pink-500 text-xl font-semibold">{t('places.sectionLabel')}</span>
              <div className="h-px bg-pink-500 w-16"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-500">
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
