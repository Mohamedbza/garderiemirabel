import { Brain, Heart, Users, Star, Book, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OurPhilosophy = () => {
  const { t } = useTranslation();

  const philosophyPillars = [
    {
      icon: Brain,
      key: 'cognitive',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Heart,
      key: 'emotional',
      color: 'text-pink-500',
      bgColor: 'bg-pink-100'
    },
    {
      icon: Users,
      key: 'social',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: Star,
      key: 'creative',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    }
  ];

  const approaches = [
    {
      icon: Book,
      key: 'playBased',
      color: 'text-blue-600'
    },
    {
      icon: Palette,
      key: 'creative',
      color: 'text-pink-600'
    },
    {
      icon: Users,
      key: 'inclusive',
      color: 'text-green-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('ourPhilosophy.title')} <span className="text-pink-500">{t('ourPhilosophy.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('ourPhilosophy.subtitle')}
          </p>
        </div>

        {/* Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {philosophyPillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div key={pillar.key} className="text-center group hover:transform hover:scale-105 transition-all">
                <div className={`w-16 h-16 ${pillar.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow`}>
                  <IconComponent size={32} className={pillar.color} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t(`ourPhilosophy.pillars.${pillar.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`ourPhilosophy.pillars.${pillar.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            {t('ourPhilosophy.coreValues.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {t('ourPhilosophy.coreValues.respect.title')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('ourPhilosophy.coreValues.respect.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {t('ourPhilosophy.coreValues.curiosity.title')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('ourPhilosophy.coreValues.curiosity.description')}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {t('ourPhilosophy.coreValues.independence.title')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('ourPhilosophy.coreValues.independence.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {t('ourPhilosophy.coreValues.joy.title')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('ourPhilosophy.coreValues.joy.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Approaches */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            {t('ourPhilosophy.approaches.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach) => {
              const IconComponent = approach.icon;
              return (
                <div key={approach.key} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-pink-200 hover:shadow-lg transition-all">
                  <IconComponent size={48} className={`${approach.color} mb-4`} />
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {t(`ourPhilosophy.approaches.${approach.key}.title`)}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`ourPhilosophy.approaches.${approach.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;