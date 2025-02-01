import React, { createContext, useContext, useState } from 'react';
import i18n from '../i18n'; // Impor i18n langsung dari file inisialisasi

// Membuat Context
const LangContext = createContext();

// Provider untuk membungkus aplikasi
export const LangProvider = ({ children }) => {
  // Ambil bahasa default dari i18n
  const [language, setLanguage] = useState(i18n.language || 'en'); // Default ke 'en' jika tidak ada bahasa yang diatur

  // Fungsi untuk mengganti bahasa
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Ubah bahasa di i18n
    setLanguage(lng); // Perbarui state di Context
  };

  return (
    <LangContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

// Custom hook untuk menggunakan context
export const useLang = () => useContext(LangContext);
