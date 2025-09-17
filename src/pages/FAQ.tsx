import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
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

  // Show only a subset of FAQ items for the home page
  const faqItems = [0, 1, 2, 3, 4, 5]; // Show first 6 FAQ items

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500 rounded-full mb-6 shadow-lg">
            <HelpCircle className="text-white" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <span className="text-base font-semibold text-gray-800 group-hover:text-pink-500 transition-colors pr-4">
                  {t(`faq.items.${index}.question`)}
                </span>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-pink-500 group-hover:scale-110 transition-transform" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-pink-500 group-hover:scale-110 transition-all" size={20} />
                  )}
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4 border-t border-gray-100 bg-blue-50/50">
                  <div className="pt-4 text-gray-600 leading-relaxed text-sm">
                    {t(`faq.items.${index}.answer`)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;