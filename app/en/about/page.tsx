

'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';

// Importar el componente de la página "about" de forma dinámica
const AboutPage = dynamic(() => import('@/app/about/page'), { ssr: false });

export default function EnglishAboutPage() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Asegurar que el idioma esté establecido como inglés
    if (language !== 'en') {
      setLanguage('en');
    }
  }, [language, setLanguage]);

  return <AboutPage />;
}
