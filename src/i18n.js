import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: document.querySelector('html').lang,
    resources: {
      en: {
        translation: {
          "welcome_msg": "Welcome",
        }
      },
      ua: {
        translation: {
          "welcome_msg": "Вітаємо",
        }
      }
    }
  });

  export default i18n;