import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './lang/en.json';
import ua from './lang/ua.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: localStorage.getItem('lang') || "en",
    resources: {
      en: {
        translation: en
      },
      ua: {
        translation: ua
      }
    }
  });

  export default i18n;