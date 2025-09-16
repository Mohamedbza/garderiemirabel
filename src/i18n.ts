import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHeroSection from "./locales/en/heroSection.json";

import frHeroSection from "./locales/fr/heroSection.json";

i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  resources: {
    fr: {
      heroSection: frHeroSection,
    },
    en: {
      heroSection: enHeroSection,
    },
  },
});

export default i18n;
