

'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';

// Importar el componente de la página "accidentes" de forma dinámica
const AccidentesPage = dynamic(() => import('@/app/accidentes/page'), { ssr: false });

export default function ChineseAccidentesPage() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Asegurar que el idioma esté establecido como chino
    if (language !== 'zh') {
      setLanguage('zh');
    }
  }, [language, setLanguage]);

  return <AccidentesPage />;
}
