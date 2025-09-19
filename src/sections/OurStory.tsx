import { Heart, Users, Award, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OurStory = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('ourStory.title')} <span className="text-pink-500">{t('ourStory.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('ourStory.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">{t('ourStory.founding.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('ourStory.founding.description')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">{t('ourStory.mission.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('ourStory.mission.description')}
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mx-auto mb-2">
                  <Users className="text-pink-500" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-800">150+</div>
                <div className="text-sm text-gray-600">{t('ourStory.stats.families')}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                  <Award className="text-blue-500" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-800">8+</div>
                <div className="text-sm text-gray-600">{t('ourStory.stats.experience')}</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="../public/notrehistoire.png"
                alt="Construit par amour"
                className="w-full h-96 object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;