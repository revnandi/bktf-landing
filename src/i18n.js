import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    language: 'hu',
    fallbackLng: 'hu',
    debug: true,
    react: { 
      useSuspense: false
    },
  });


export default i18n;