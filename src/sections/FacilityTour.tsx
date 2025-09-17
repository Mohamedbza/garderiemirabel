import { MapPin, Camera, ArrowRight, Shield, Utensils, TreePine } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FacilityTour = () => {
  const { t } = useTranslation();

  const facilityAreas = [
    {
      key: 'classrooms',
      icon: Camera,
      color: 'bg-blue-100 text-blue-600',
      imageFile: 'bright-classroom-interior-oUcoI9euLMkthuiM1uTGF62GQf8lpj.png'
    },
    {
      key: 'playground',
      icon: TreePine,
      color: 'bg-green-100 text-green-600',
      imageFile: 'outdoor-playground-equipment-SwR3ZlEafz47Msnq8iuuY8Eob8huDr.png'
    },
    {
      key: 'kitchen',
      icon: Utensils,
      color: 'bg-pink-100 text-pink-600',
      imageFile: 'modern-kitchen-facility-3ByESqrkd7LPMGx0fGhNwNBGpoyQfN.png'
    },
    {
      key: 'napRoom',
      icon: Shield,
      color: 'bg-purple-100 text-purple-600',
      imageFile: 'quiet-rest-area-ips9Z81lNHBkdJlIXh2MZVf88FWfCz.png'
    },
    {
      key: 'artStudio',
      icon: Camera,
      color: 'bg-yellow-100 text-yellow-600',
      imageFile: 'art-workshop-studio-CyfT9aw2tkzlTDDr0XZNqJQtLrEWqi.png'
    },
    {
      key: 'library',
      icon: Camera,
      color: 'bg-indigo-100 text-indigo-600',
      imageFile: 'cozy-reading-corner-5gOpOYTDWdqSbrq7IwaCpMrUWNji5V.png'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('facilityTour.title')} <span className="text-blue-500">{t('facilityTour.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('facilityTour.subtitle')}
          </p>
        </div>

        {/* Facility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilityAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <div key={area.key} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                {/* Facility area image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={`/images/installations/${area.imageFile}`}
                    alt={t(`facilityTour.areas.${area.key}.title`)}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden h-48 bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center relative overflow-hidden">
                    <div className={`w-16 h-16 rounded-full ${area.color} flex items-center justify-center`}>
                      <IconComponent size={32} />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">{t('facilityTour.viewGallery')}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {t(`facilityTour.areas.${area.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {t(`facilityTour.areas.${area.key}.description`)}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-1 mb-4">
                    {[0, 1, 2].map(index => (
                      <li key={index} className="text-xs text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></span>
                        {t(`facilityTour.areas.${area.key}.features.${index}`)}
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                    {t('facilityTour.learnMore')}
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <Shield size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {t('facilityTour.safety.title')}
            </h3>
            <p className="text-gray-600">
              {t('facilityTour.safety.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['security', 'hygiene', 'emergency', 'supervision'].map((feature, index) => (
              <div key={feature} className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {t(`facilityTour.safety.features.${feature}.title`)}
                </h4>
                <p className="text-sm text-gray-600">
                  {t(`facilityTour.safety.features.${feature}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FacilityTour;