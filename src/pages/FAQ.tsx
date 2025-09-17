import { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Shield, Heart, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      icon: Users,
      key: 'enrollment',
      color: 'bg-blue-500',
      items: [0, 1, 2, 3]
    },
    {
      icon: Shield,
      key: 'safety',
      color: 'bg-green-500',
      items: [4, 5, 6]
    },
    {
      icon: Heart,
      key: 'care',
      color: 'bg-pink-500',
      items: [7, 8, 9]
    },
    {
      icon: Star,
      key: 'programs',
      color: 'bg-purple-500',
      items: [10, 11, 12]
    }
  ];

  const allFaqItems = Array.from({ length: 13 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-6 shadow-xl">
            <Heart className="text-white" size={32} />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {faqCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.key}
                  className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    const firstItem = category.items[0];
                    document.getElementById(`faq-${firstItem}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-pink-500 transition-colors">
                    {t(`faq.categories.${category.key}`)}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {allFaqItems.map((index) => (
              <div
                key={index}
                id={`faq-${index}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition-colors pr-4">
                    {t(`faq.items.${index}.question`)}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="text-pink-500 group-hover:scale-110 transition-transform" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 group-hover:text-pink-500 group-hover:scale-110 transition-all" size={24} />
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="px-8 pb-6 border-t border-gray-100 bg-gradient-to-r from-blue-50/50 to-pink-50/50">
                    <div className="pt-4 text-gray-600 leading-relaxed">
                      {t(`faq.items.${index}.answer`)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <Heart size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t('faq.stillHaveQuestions')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('faq.contactMessage')}</p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;