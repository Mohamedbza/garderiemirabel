import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

// Get saved language from localStorage, fallback to 'fr' if not found
const getSavedLanguage = (): string => {
  try {
    return localStorage.getItem('selectedLanguage') || 'fr';
  } catch (error) {
    // Fallback for SSR or when localStorage is not available
    return 'fr';
  }
};

const savedLanguage = getSavedLanguage();

i18n.use(initReactI18next).init({
  lng: savedLanguage,
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  },
});

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem('selectedLanguage', lng);
  } catch (error) {
    // Ignore error if localStorage is not available
    console.warn('Could not save language preference to localStorage:', error);
  }
});

export default i18n;
