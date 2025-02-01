import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Gunakan plugin untuk lazy load
  .use(initReactI18next) // Inisialisasi react-i18next
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json' // Lokasi file JSON di folder public/locales
    },
    lng: 'en', // Bahasa default
    fallbackLng: 'en', // Jika bahasa tidak ditemukan, gunakan bahasa ini
    interpolation: {
      escapeValue: false, // React sudah aman dari XSS
    }
  });

export default i18n;
