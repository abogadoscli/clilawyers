

'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Importar el componente de la página principal de forma dinámica
const MainPage = dynamic(() => import('@/app/page'), { ssr: false });

export default function ChineseHomePage() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    // Asegurar que el idioma esté establecido como chino
    if (language !== 'zh') {
      setLanguage('zh');
    }
  }, [language, setLanguage]);

  return <MainPage />;
}
