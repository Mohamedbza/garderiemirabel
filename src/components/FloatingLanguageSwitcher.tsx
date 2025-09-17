import { useState } from 'react';
import { Globe, ChevronUp } from 'lucide-react';
import i18n from '../i18n';

const FloatingLanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = i18n.language;

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Language Options */}
      {isOpen && (
        <div className="mb-3 flex flex-col space-y-2">
          {languages
            .filter(lang => lang.code !== currentLanguage)
            .map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="group flex items-center justify-between bg-white hover:bg-pink-50 text-gray-700 hover:text-pink-600 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[140px] border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium text-sm">{lang.label}</span>
                </div>
                <ChevronUp className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))
          }
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
      >
        <div className="relative">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <div className="flex flex-col items-center">
              <Globe className="w-5 h-5 mb-0.5" />
              <span className="text-xs font-bold">{currentLang.code.toUpperCase()}</span>
            </div>
          )}
        </div>
      </button>

    </div>
  );
};

export default FloatingLanguageSwitcher;