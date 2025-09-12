

'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';

// Importar el componente de la página "services" de forma dinámica
const ServicesPage = dynamic(() => import('@/app/services/page'), { ssr: false });

export default function ChineseServicesPage() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Asegurar que el idioma esté establecido como chino
    if (language !== 'zh') {
      setLanguage('zh');
    }
  }, [language, setLanguage]);

  return <ServicesPage />;
}
