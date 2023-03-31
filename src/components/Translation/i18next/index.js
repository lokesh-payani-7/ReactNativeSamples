import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import es from './es.json';
import ka from './ka.json';
import ta from './ta.json';

i18next.use(initReactI18next).init({
  resources: {
    en,
    es,
    ka,
    ta,
  },
  lng: 'en',
  fallbackLng: 'en',
  react: {
    useSuspense: false,
  },

  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
