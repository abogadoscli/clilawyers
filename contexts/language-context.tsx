
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'es' | 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  // Cargar idioma del localStorage al inicializar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && ['es', 'en', 'zh'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const changeLanguage = (newLang: Language) => {
    console.log('🌍 Cambiando idioma a:', newLang);
    setLanguage(newLang);
    
    // Guardar en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLang);
    }
    
    console.log('✅ Idioma cambiado exitosamente');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
