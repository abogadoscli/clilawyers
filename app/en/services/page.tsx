

'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';

// Importar el componente de la página "services" de forma dinámica
const ServicesPage = dynamic(() => import('@/app/services/page'), { ssr: false });

export default function EnglishServicesPage() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Asegurar que el idioma esté establecido como inglés
    if (language !== 'en') {
      setLanguage('en');
    }
  }, [language, setLanguage]);

  return <ServicesPage />;
}
