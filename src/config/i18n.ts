import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation JSON files for all languages
import enTranslations from '../locales/en.json';
import arTranslations from '../locales/ar.json';
import frTranslations from '../locales/fr.json';
import deTranslations from '../locales/de.json';
import itTranslations from '../locales/it.json';
import esTranslations from '../locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
      fr: {
        translation: frTranslations,
      },
      de: {
        translation: deTranslations,
      },
      it: {
        translation: itTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    lng: localStorage.getItem('language') || 'en', // Load language from localStorage, default: 'en'
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

  i18n.on('languageChanged', (lng) => {
    if (lng === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  });

export default i18n;
